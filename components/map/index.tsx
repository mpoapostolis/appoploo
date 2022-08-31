import mapboxgl, { LngLat, LngLatBoundsLike } from "mapbox-gl";
import { ReactNode, useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/router";
import { usePoints } from "../../lib/points";

mapboxgl.accessToken =
  "pk.eyJ1IjoibXBvYXBvc3RvbGlzIiwiYSI6ImNraWNhYjlvMjBpN3MycXBlN3Y1dTRuencifQ.n6ohBfLI_yGS7kjg92XMow";

export const Map = () => {
  const router = useRouter();
  const [mapLoad, setMapLoad] = useState(false);
  const q = useRouter().query;
  const { data: points } = usePoints(q.id, q.routes);
  const _map = useRef<mapboxgl.Map>();
  const marker = useRef<mapboxgl.Marker>();

  useEffect(() => {
    if (_map.current) return;
    _map.current = new mapboxgl.Map({
      container: "map",
      pitch: 0, // pitch in degrees

      center: {
        lng: 23.5061835,
        lat: 38.0,
      },

      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 12,
    });

    _map.current.on("load", (evt) => {
      evt.target?.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [],
          },
        },
      });

      evt.target.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#f88",
          "line-width": 3,
        },
      });
      setMapLoad(true);
      marker.current = new mapboxgl.Marker()
        .setLngLat([30.5, 50.5])
        .addTo(evt.target);
    });
  });

  const lat = router.query.lat;
  const lng = router.query.lng;

  useEffect(() => {
    if (!_map.current?.loaded() || !lat || !lng) return;
    _map.current.flyTo({
      center: [+lng, +lat],
      zoom: 15,
    });
  }, [lat, lng, _map.current]);
  const lastPos = points.at(-1);

  useEffect(() => {
    if (!marker?.current?.setLngLat) return;

    if (!q.coords && lastPos)
      marker?.current?.setLngLat([lastPos?.lng, lastPos?.lat]);

    if (!_map.current?.loaded()) return;
    const lngLat = `${q.coords}`?.split(",")?.map(Number) as [number, number];
    marker.current?.setLngLat(lngLat);
  }, [lat, lng, _map.current, q.coords, lastPos]);

  useEffect(() => {
    if (!_map.current || !mapLoad) return;
    const coords = points.map((p) => [p.lat, p.lng]);

    // @ts-ignore
    _map.current.getSource("route")?.setData({
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: coords,
      },
    });

    if (coords.length < 2) return;
    _map?.current?.fitBounds(coords as LngLatBoundsLike, {
      zoom: 7.5,
    });
  }, [_map.current, mapLoad, points]);

  return (
    <div className="w-full md:h-screen h-[95vh] sticky  overflow-hidden">
      <div className="w-full xl:rounded-l-box h-full relative" id="map"></div>
    </div>
  );
};
