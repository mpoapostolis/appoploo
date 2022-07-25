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
      <div className="w-full rounded-l-box h-full relative" id="map"></div>
    </div>
  );
};
