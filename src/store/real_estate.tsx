import { create } from "zustand";

export type RealEstate = {
  _id: string;
  //
  title: string;
  description: string;
  type: string;
  //
  price: number;
  area: number;
  rooms: number;
  bathrooms: number;
  garages: number;
  //
  addressId: string;
  //
  thumbnail: string;
  images: string[];
};

type RealEstateStore = {
  realEstateList: RealEstate[];
  setRealEstateList: (realEstateList: RealEstate[]) => void;
};

const useRealEstateStore = create<RealEstateStore>((set) => ({
  realEstateList: [],
  setRealEstateList: (realEstateList: RealEstate[]) => set({ realEstateList: realEstateList }),
}));

export default useRealEstateStore;
