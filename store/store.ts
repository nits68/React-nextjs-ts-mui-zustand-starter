import { create } from "zustand";

// Note: 'create' as a default export is a deprecated import.

interface IStore {
  count: number;
  increment: () => void;
}

const useStore = create<IStore>((set) => ({
  count: 0,
  increment: () => set((state: IStore) => ({ count: state.count + 1 })),
}));

export default useStore;
