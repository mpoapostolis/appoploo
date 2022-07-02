import mapboxgl from "mapbox-gl";
import { ReactNode, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoibXBvYXBvc3RvbGlzIiwiYSI6ImNraWNhYjlvMjBpN3MycXBlN3Y1dTRuencifQ.n6ohBfLI_yGS7kjg92XMow";

export const Map = (props: { children: ReactNode }) => {
  useEffect(() => {
    new mapboxgl.Map({
      container: "map",
      pitch: 0, // pitch in degrees
      center: {
        lng: 23.5061835,
        lat: 38.0,
      },
      style: "mapbox://styles/mpoapostolis/cl4lehet9003a14mtd5su73hq",
      zoom: 12,
    });
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div className="w-full h-full" id="map" />
      <div className="z-50">
        {props.children}
        <h1>asdasdads</h1>
      </div>
    </div>
  );
};
