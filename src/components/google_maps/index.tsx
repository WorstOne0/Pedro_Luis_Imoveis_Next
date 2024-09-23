"use client";

// Next
import { GoogleMap } from "@react-google-maps/api";

export default function GoogleMaps({ children, height = "100%", width = "100%" }: { children?: React.ReactNode; height?: string; width?: string }) {
  const defaultMapCenter = {
    lat: -24.960731,
    lng: -53.519697,
  };
  const defaultMapZoom = 13;
  const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: "auto",
    mapTypeId: "hybrid",
  };

  return (
    <div className="h-full w-full relative">
      <GoogleMap mapContainerStyle={{ height, width }} center={defaultMapCenter} zoom={defaultMapZoom} options={defaultMapOptions}>
        {children}
      </GoogleMap>

      <div className="h-[5rem] w-[5rem] bg-blue-500 absolute top-[1rem] right-[1rem]"></div>
    </div>
  );
}
