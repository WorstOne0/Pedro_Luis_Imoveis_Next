"use client";

import { MarkerF } from "@react-google-maps/api";
// Components
import { GoogleMaps, RealEstateCard, Searchbar } from "@/components";
// Styles
import styles from "./styles.module.css";

export default function Search() {
  const teste = [1, 2, 3, 4];

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
          {teste.map((item, index) => (
            <RealEstateCard realEstate={item} key={`real_estate_card_${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
