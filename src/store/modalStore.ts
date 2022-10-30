import create from "zustand";
export interface IModalStore {
  isOpen: boolean;
  content?: JSX.Element;
  open: (content: JSX.Element) => void;
  close: () => void;
}
export const useModalStore = create<IModalStore>((set) => ({
  isOpen: false,
  content: undefined,
  setContent: (content: JSX.Element) => set({ content }),
  open: (content: JSX.Element) => set({ isOpen: true, content }),
  close: () => set({ isOpen: false }),
}));
