// getVehicles with useSwr

import { AxiosError } from "axios";
import useSWR from "swr";
import { fetcher } from "../utils";
import { Vehicle } from "./types";

export function useVehicles() {
  const { data, error } = useSWR<Vehicle[], AxiosError>(
    `/api/vehicles`,
    fetcher
  );

  return {
    data: data ?? [],
    isLoading: !error && !data,
    isError: error,
  };
}
