import { Database } from "./../services/db";
import create from "zustand";
import { ICollection } from "../models/models";

export interface ICollectionStore {
  collections: ICollection[];
  setCollections: (collections: ICollection[]) => void;
  addCollection: (collection: ICollection) => void;
  removeCollection: (collection: ICollection) => void;
  updateCollection: (collection: ICollection) => void;
  syncCollections: () => void;
}

export const useCollectionStore = create<ICollectionStore>((set) => ({
  collections: [],
  setCollections: (collections) => set({ collections }),
  addCollection: (collection) => {
    set((state) => ({
      collections: [...state.collections, collection],
    }));
  },
  removeCollection: (collection) => {},
  updateCollection: (collection) => {},
  syncCollections: () => {
    Database.collections.toArray().then((collections) => {
      set({ collections });
    });
  },
}));
