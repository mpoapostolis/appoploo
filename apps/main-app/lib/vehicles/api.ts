import { Vehicle } from "./types";

const vehicles: Vehicle[] = Array.from({ length: 100 }).map((_, i) => ({
  name: `Vehicle ${i}`,
  model: `Model ${i}`,
  latLng: {
    lat: Math.random() * 180 - 90,
    lng: Math.random() * 360 - 180,
  },
}));

export const getVehicles = () => {
  return Promise.resolve().then(() => vehicles);
};
