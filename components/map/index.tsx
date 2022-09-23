import mapboxgl, { LngLat, LngLatBoundsLike } from "mapbox-gl";
import { ReactNode, useEffect, useRef, useState } from "react";
import Map, { GeolocateControl, Marker, useMap } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/router";
import { usePoints } from "../../lib/points";
import axios from "axios";

function Controls() {}

mapboxgl.accessToken =
  "pk.eyJ1IjoibXBvYXBvc3RvbGlzIiwiYSI6ImNraWNhYjlvMjBpN3MycXBlN3Y1dTRuencifQ.n6ohBfLI_yGS7kjg92XMow";

export const MyMap = () => {
  const router = useRouter();
  const q = useRouter().query;
  const { data: points } = usePoints(q.IMEI, q.days);
  const [first] = points;

  const { coords } = router.query;
  let [lng, lat] = coords ? `${coords}`?.split(",").map(Number) : [];
  if (first && !lng) lng = first.lat;
  if (first && !lat) lat = first.lng;
  return (
    <div className="w-full md:h-screen h-[95vh] sticky  overflow-hidden">
      <Map
        onClick={async (evt) => {
          const { lng, lat } = evt.lngLat;

          await axios.post(`/api/tracker/${q.IMEI}`, {
            lat,
            lng,
          });
        }}
        initialViewState={{
          longitude: 23.5061835,
          latitude: 38.0,
          zoom: 7,
        }}
        style={{
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {first && (
          <Marker longitude={lng} latitude={lat} anchor="bottom"></Marker>
        )}
      </Map>
    </div>
  );
};
