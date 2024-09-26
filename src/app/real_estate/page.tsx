"use client";

// Next
import Image from "next/image";
import { MarkerF } from "@react-google-maps/api";
import { useApiFetch } from "@/hooks";
// Store
import { useRealEstateStore } from "@/store";
// Components
import { GoogleMaps, RealEstateCard, Searchbar } from "@/components";
// Styles
import styles from "./styles.module.css";

export default function Search() {
  const { realEstateList, setRealEstateList } = useRealEstateStore((state) => state);
  const { isLoading } = useApiFetch({ url: "http://localhost:4000/real_estate", method: "post" }, setRealEstateList);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full w-full relative">
      <GoogleMaps>
        <MarkerF
          position={{
            lat: -24.960731,
            lng: -53.519697,
          }}
        />
      </GoogleMaps>

      <div className="h-[calc(100%-2rem)] w-[50rem] bg-white rounded-[0.8rem] flex flex-col absolute top-[1rem] left-[1rem]">
        <Searchbar />

        <div className="min-h-0 grow px-3 overflow-y-auto">
          {realEstateList.map((item, index) => (
            <RealEstateCard realEstate={item} key={`real_estate_card_${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
