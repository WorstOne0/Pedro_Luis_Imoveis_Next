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
  address: Address;
  //
  thumbnail: string;
  images: string[];
};

export type Address = {
  _id: string;
  targetId: string;
  //
  cep: string;
  street: string;
  district: string;
  city: string;
  state: string;
  complement: string;
  number: string;
  //
  position: google.maps.LatLng;
};

type RealEstateStore = {
  realEstateList: RealEstate[];
  realEstateSelected: RealEstate | null;
  //
  setRealEstateList: (realEstateList: RealEstate[]) => void;
  setRealEstateSelected: (realEstate: RealEstate) => void;
};

const useRealEstateStore = create<RealEstateStore>((set) => ({
  realEstateList: [],
  realEstateSelected: null,
  setRealEstateList: (realEstateList: RealEstate[]) => set({ realEstateList: realEstateList }),
  setRealEstateSelected: (realEstate: RealEstate) => set({ realEstateSelected: realEstate }),
}));

export default useRealEstateStore;
