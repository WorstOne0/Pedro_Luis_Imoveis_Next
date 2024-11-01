import { create } from "zustand";

type SearchBarStore = {
  isSearchOpen: boolean;
  //
  setIsSearchOpen: (isSearchOpen: boolean) => void;
};

const useSearchBarStore = create<SearchBarStore>((set) => ({
  isSearchOpen: false,
  setIsSearchOpen: (isSearchOpen: boolean) => set({ isSearchOpen: isSearchOpen }),
}));

export default useSearchBarStore;
