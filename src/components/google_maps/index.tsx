"use client";

import { GoogleMap } from "@react-google-maps/api";

export default function GoogleMaps() {
  const defaultMapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const defaultMapCenter = {
    lat: 35.8799866,
    lng: 76.5048004,
  };
  const defaultMapZoom = 18;
  const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: "auto",
    mapTypeId: "satellite",
  };

  return (
    <div className="h-full w-full">
      <GoogleMap mapContainerStyle={defaultMapContainerStyle} center={defaultMapCenter} zoom={defaultMapZoom} options={defaultMapOptions}></GoogleMap>
    </div>
  );
}
