// getVehicles with useSwr

import { AxiosError } from "axios";
import useSWR from "swr";
import { fetcher } from "../utils";
import { Points } from "./types";

export function usePoints(id?: string | string[] | undefined) {
  const { data, error } = useSWR<Points[], AxiosError>(
    id && `/api/tracker/${id}`,
    fetcher
  );

  return {
    data: data ?? [],
    isLoading: !error && !data,
    isError: error,
  };
}
