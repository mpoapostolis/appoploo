import mapboxgl from "mapbox-gl";
import { ReactNode, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { VehicleCard } from "../vehicleCard";
import { useVehicles } from "../../lib/vehicles";
import { useRouter } from "next/router";

mapboxgl.accessToken =
  "pk.eyJ1IjoibXBvYXBvc3RvbGlzIiwiYSI6ImNraWNhYjlvMjBpN3MycXBlN3Y1dTRuencifQ.n6ohBfLI_yGS7kjg92XMow";

export const Map = () => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const { data: vehicles } = useVehicles();
  const router = useRouter();
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      pitch: 0, // pitch in degrees
      center: {
        lng: 23.5061835,
        lat: 38.0,
      },

      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 12,
    });
    setMap(map);
  }, []);

  const lat = router.query.lat;
  const lng = router.query.lng;
  useEffect(() => {
    if (!map || !lat || !lng) return;
    map.flyTo({
      center: [+lng, +lat],
      zoom: 15,
    });
  }, [lat, lng, map]);

  useEffect(() => {
    if (!map) return;
    vehicles.forEach((vehicle) => {
      const marker = new mapboxgl.Marker({
        draggable: false,
      })
        .setLngLat(vehicle.latLng)
        .addTo(map);
      marker.setPopup(
        new mapboxgl.Popup({
          closeOnClick: false,
        })
          .setHTML(
            `<div className="flex flex-col">
                <div className="font-bold text-xl">${vehicle.name}</div>
                <div className="stat-desc">${vehicle.model}</div> 
                <div className="stat-desc">21% more than last month</div> 
              </div>`
          )
          .setLngLat(vehicle.latLng)
      );
    });
  }, [map, vehicles]);

  return (
    <div className="w-full md:h-screen h-[94vh] relative overflow-hidden">
      <div className="grid grid-cols-2 absolute top-0 w-full z-50 left-0">
        <div className="border-r  border-white border-opacity-10  bg-base-100">
          <select className="select focus:outline-none rounded-none w-full">
            <option disabled selected>
              Select Vehicle
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div className="border-r  border-white border-opacity-10  bg-base-100">
          <select className="select focus:outline-none rounded-none w-full">
            <option disabled selected>
              show routes from last n days
            </option>
            <option>Last 1 day routes</option>
            <option>Last 2 days routes</option>
            <option>Last 3 days routes</option>
            <option>Last 1 week routes</option>
            <option>Last 2 weeks routes</option>
            <option>Last 3 weeks routes</option>
            <option>Last 1 month routes</option>
            <option>Last 2 months routes</option>
            <option>Last 3 months routes</option>
          </select>
        </div>
      </div>
      <div className="w-full  h-full relative" id="map"></div>
    </div>
  );
};
