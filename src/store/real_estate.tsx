import { create } from "zustand";

const useRealEstateStore = create((set) => ({
  user: null,
  login: () => set({ user: null }),
  logout: () => set({ user: null }),
}));

export default useRealEstateStore;
