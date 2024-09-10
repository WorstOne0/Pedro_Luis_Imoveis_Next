// Next
import { MapProvider } from "@/services/google_maps";
// Components
import { GoogleMaps, RealEstateCard, Searchbar } from "@/components";
// Styles
import styles from "./styles.module.css";

export default function Search() {
  const teste = [1, 2, 3, 4];

  return (
    <MapProvider>
      <div className="h-full w-full relative">
        <GoogleMaps />

        <div className="h-[calc(100%-2rem)] w-[50rem] bg-white rounded-[0.8rem] flex flex-col absolute top-[1rem] left-[1rem]">
          <Searchbar />

          <div className="grow px-3 overflow-y-auto">
            {teste.map((item, index) => (
              <RealEstateCard realEstate={item} key={`real_estate_card_${index}`} />
            ))}
          </div>
        </div>
      </div>
    </MapProvider>
  );
}
