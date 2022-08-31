import { AxiosError } from "axios";
import useSWR from "swr";
import { fetcher } from "../utils";
import { Tracker } from "./types";

export function useTrackers() {
  const { data, error } = useSWR<Tracker[], AxiosError>(
    `/api/tracker`,
    fetcher
  );

  return {
    data: data ?? [],
    isLoading: !error && !data,
    isError: error,
  };
}
