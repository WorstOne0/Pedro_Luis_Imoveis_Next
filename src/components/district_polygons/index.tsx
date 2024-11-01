// Next
import { PolygonF } from "@react-google-maps/api";
// Store
import { useDistrictStore } from "@/store";
// Utils
import districtsGeo from "@/utils/districts_geo";

export default function DistrictPolygons({ map }: { map: google.maps.Map | null }) {
  const { districtSelected, setDistrictSelected } = useDistrictStore((state) => state);

  const createPolygons = (item: { name: string; color: string; geometry: any }) => {
    const path: any = item.geometry.coordinates.map((item: any, index: any) => ({ lat: item[1], lng: item[0] }));

    return (
      <PolygonF
        key={item.name}
        paths={path}
        onClick={() => handleClick(item)}
        options={{ fillColor: item.color, fillOpacity: 0.18, strokeColor: item.color, strokeOpacity: 0.8, strokeWeight: 3 }}
      />
    );
  };

  const handleClick = (item: any) => {
    if (districtSelected.name === item.name) {
      setDistrictSelected("");

      const allPaths = districtsGeo.districts.map((item) => item.geometry.coordinates.map((item: any) => ({ lat: item[1], lng: item[0] })));

      let bounds = new window.google.maps.LatLngBounds();
      allPaths.flat().forEach((item: any) => bounds.extend(item));
      map?.fitBounds(bounds, { left: 500 });

      return;
    }

    setDistrictSelected(item);

    let bounds = new window.google.maps.LatLngBounds();
    item.geometry.coordinates.forEach((item: any, index: any) => bounds.extend({ lat: item[1], lng: item[0] }));
    map?.fitBounds(bounds, { left: 500 });
  };

  if (districtSelected) return createPolygons(districtSelected);

  return districtsGeo.districts.map((item, index) => createPolygons(item));
}
