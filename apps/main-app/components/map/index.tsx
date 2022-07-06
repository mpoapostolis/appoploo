import mapboxgl from "mapbox-gl";
import { ReactNode, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { VehicleCard } from "../vehicleCard";

mapboxgl.accessToken =
  "pk.eyJ1IjoibXBvYXBvc3RvbGlzIiwiYSI6ImNraWNhYjlvMjBpN3MycXBlN3Y1dTRuencifQ.n6ohBfLI_yGS7kjg92XMow";

export const Map = () => {
  useEffect(() => {
    new mapboxgl.Map({
      container: "map",
      pitch: 0, // pitch in degrees
      center: {
        lng: 23.5061835,
        lat: 38.0,
      },

      style: "mapbox://styles/mapbox/streets-v11",
      //   style: "mapbox://styles/mpoapostolis/cl4lehet9003a14mtd5su73hq",
      zoom: 12,
    });
  }, []);

  return (
    <div className="w-full md:h-screen h-[94vh] overflow-hidde">
      <div className="drawer  drawer-end z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content h-full">
          <div className="w-full  h-full relative" id="map"></div>
          <label
            htmlFor="my-drawer"
            className="absolute top-3 right-3 z-50 btn rounded-none"
          >
            <img
              className="w-5 h-5 mr-2"
              src="https://s2.svgbox.net/hero-outline.svg?ic=selector&color=aaa"
              alt=""
            />
            Select Vehicle
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="px-4 py-4 bg-base-100 w-80">
            <VehicleCard />
            <div className="divider"></div>

            <VehicleCard />
            <div className="divider"></div>
            <VehicleCard />
            <div className="divider"></div>
            <VehicleCard />
            <div className="divider"></div>
            <VehicleCard />
            <div className="divider"></div>
            <VehicleCard />
            <div className="divider"></div>
            <VehicleCard />
            <div className="divider"></div>
            <VehicleCard />
            <div className="divider"></div>
            <VehicleCard />
            <div className="divider"></div>
            <VehicleCard />
            <div className="divider"></div>
            <VehicleCard />
            <div className="divider"></div>
            <VehicleCard />
            <div className="divider"></div>
            <VehicleCard />
            <div className="divider"></div>
          </ul>
        </div>
      </div>
    </div>
  );
};
