// Next
import { MapProvider } from "@/services/google_maps";
// Components
import { GoogleMaps, RealEstateCard } from "@/components";
// Styles
import styles from "./styles.module.css";

export default function Search() {
  const teste = [1, 2, 3, 4];

  return (
    <MapProvider>
      <div className="h-full w-full relative">
        <GoogleMaps />

        <div className="h-[calc(100%-2rem)] w-[50rem] bg-blue-500 rounded-[0.8rem] flex flex-col absolute top-[1rem] left-[1rem]">
          <div className="h-[6rem] w-full bg-red-500">searchbar</div>

          <div className="grow px-2 overflow-y-auto">
            {teste.map((item, index) => (
              <RealEstateCard key={`real_estate_card_${index}`} realEstate={item} />
            ))}
          </div>
        </div>
      </div>
    </MapProvider>
  );
}
