"use client";

import { GoogleMap } from "@react-google-maps/api";

export default function GoogleMaps({ height = "100%", width = "100%" }: { height?: string; width?: string }) {
  const defaultMapCenter = {
    lat: 35.8799866,
    lng: 76.5048004,
  };
  const defaultMapZoom = 18;
  const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: "auto",
    mapTypeId: "hybrid",
  };

  return (
    <div className="h-full w-full relative">
      <GoogleMap mapContainerStyle={{ height, width }} center={defaultMapCenter} zoom={defaultMapZoom} options={defaultMapOptions}></GoogleMap>

      <div className="h-[5rem] w-[5rem] bg-blue-500 absolute top-[1rem] right-[1rem]"></div>
    </div>
  );
}
