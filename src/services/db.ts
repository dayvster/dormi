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
  return (await Database.collections.where("name").equals(name).count()) > 0;
};
