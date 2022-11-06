import Dexie, { Table } from "dexie";
import { v4 as uuidv4 } from "uuid";
import { ICollection, IEnvironment, IFolder, IRequest } from "../models/models";
export const Settings = {
  name: "DormiBase",
  version: 1,
};

export class DB extends Dexie {
  environments: Table<IEnvironment, string>;
  collections: Table<ICollection, string>;
  folders: Table<IFolder, string>;
  requests: Table<IRequest, string>;

  dbName = "DormiBase";

  constructor() {
    super(Settings.name);
    this.version(Settings.version).stores({
      environments: "++uid, name, description, created, updated",
      collections: "uid, name, description, created, updated",
      folders: "uid, name, description, created, updated",
      requests: "uid, name, description, created, updated",
    });

    this.collections = this.table("collections");
  }
}

export const Database = new DB();

const _getByUid = async (uid: string, table: Table<any, string>) => {
  return await table.get(uid);
};

const _getByName = async (name: string, table: Table<any, string>) => {
  return await table.where("name").equals(name).first();
};

const _search = async (
  column: string,
  value: string,
  table: Table<any, string>
) => {
  return await table.where(column).startsWithIgnoreCase(value).toArray();
};

const _checkExists = async (
  column: string,
  value: string,
  table: Table<any, string>
) => {
  return (await table.where(column).equals(value).count()) > 0;
};

export const AddCollection = async (collection: {
  name: string;
  description?: string;
}) => {
  const { name, description = "" } = collection;
  if (!name) return { error: "Collection name is required." };
  if (name.length > 50)
    return { error: "Collection name cannot be longer than 50 characters." };
  if (description.length > 200)
    return {
      error: "Collection description cannot be longer than 200 characters.",
    };
  if (await CheckCollectionExists(name))
    return { error: "Collection with that name already exists." };

  Database.collections.add({
    uid: uuidv4(),
    name: collection.name,
    description: collection.description,
    created: new Date(),
    updated: new Date(),
  });
  return { success: true };
};

export const CheckCollectionExists = async (name: string): Promise<boolean> => {
  return await _checkExists("name", name, Database.collections);
};

export const GetCollectionByUID = async (uid: string) => {
  return await _getByUid(uid, Database.collections);
};
export const SearchCollections = async (search: string) => {
  return await _search("name", search, Database.collections);
};

export const AddFolderToCollection = async ({
  collectionUID,
  folder,
}: {
  collectionUID: string;
  folder: IFolder;
}) => {
  const collection = await GetCollectionByUID(collectionUID);
  if (!collection) return { error: "Collection not found." };
  if (!folder.name) return { error: "Folder name is required." };

  const newFolder: IFolder = {
    uid: uuidv4(),
    name: folder.name,
    description: folder.description,
    created: new Date(),
    updated: new Date(),
    collection: collectionUID,
    folders: [],
    requests: [],
  };
  Database.folders.add(newFolder);
  return { success: true };
};
export const DeleteCollection = async (
  uid: string,
  deleteData: boolean = false
) => {
  const collection = await GetCollectionByUID(uid);
  if (!collection) return { error: "Collection not found." };
  if (deleteData) {
    await Database.collections.delete(uid);
    await Database.folders.where("collection").equals(uid).delete();
    await Database.requests.where("collection").equals(uid).delete();
  } else {
    await Database.collections.delete(uid);
  }
  return { success: true };
};

export const Collections = {
  AddCollection,
  CheckCollectionExists,
  GetCollectionByUID,
  SearchCollections,
  AddFolderToCollection,
  DeleteCollection,
};
export const CheckFolderExists = async (name: string): Promise<boolean> => {
  return await _checkExists("name", name, Database.folders);
};

export const AddFolder = async (folder: IFolder) => {
  const { name, description = "" } = folder;
  if (!name) return { error: "Folder name is required." };
  if (await CheckFolderExists(name))
    return { error: "Folder with that name already exists." };

  const _folder: IFolder = {
    uid: uuidv4(),
    name: folder.name,
    description: folder.description,
    collection: folder.collection,
    created: new Date(),
    updated: new Date(),
    folders: folder.folders,
    requests: folder.requests,
  };
  Database.folders.add(_folder);
  return { success: true };
};

export const GetFolderByUID = async (uid: string) => {
  return await _getByUid(uid, Database.folders);
};

export const Folders = {
  AddFolder,
  CheckFolderExists,
  GetFolderByUID,
};
