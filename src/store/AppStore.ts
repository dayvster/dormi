import { ICollection } from "../models/models";
import create from "zustand";

export interface IAppState {
  currentCollection: ICollection | null;
  setCurrentCollection: (collection: ICollection | null) => void;
  clearCurrentCollection: () => void;
  getCurrentCollection: () => ICollection | null;
}

export const useAppStore = create<IAppState>((set, get) => ({
  currentCollection: null,
  setCurrentCollection: (collection: ICollection | null) =>
    set({ currentCollection: collection }),
  clearCurrentCollection: () => set({ currentCollection: null }),
  getCurrentCollection: () => {
    return get().currentCollection;
  },
}));
