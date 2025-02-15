import axios from "axios";
import { create } from "zustand";

// Note: 'create' as a default export is a deprecated import.

interface IStore {
  counter: number;
  incrementCounter: () => void;
  clearUsers: () => void;
  getUsers: () => Promise<void>;
  unpressed: boolean;
  loading: boolean;
  success: boolean;
  error: boolean;
  data: any;
  errorData: any;
}

const initialState = {
  unpressed: true,
  loading: false,
  success: false,
  error: false,
  data: null,
  errorData: null,
};

const useStore = create<IStore>((set) => ({
  counter: 0,
  ...initialState,
  incrementCounter: () => set((state: IStore) => ({ counter: state.counter + 1 })),
  clearUsers: () => set({ ...initialState }),
  getUsers: async () => {
    set({ ...initialState, loading: true });
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      set({ loading: false, success: true, unpressed: false, data: res.data });
      console.log("Data fetch ok", res.data);
    } catch (err: any) {
      console.log("Error in data fetch:", err);
      console.error("Error in data fetch:", err);
      set({ ...initialState, unpressed: false, error: true, errorData: err.message });
    }
  },
}));

export default useStore;
