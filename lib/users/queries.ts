// getVehicles with useSwr

import axios from "axios";

export async function login(userName: string, password: string) {
  const data = await axios.post("/api/auth?type=login", {
    userName,
    password,
  });

  return {
    data: data,
  };
}

export async function register(
  userName: string,
  password: string,
  passwordConfirmation: string
) {
  const data = await axios.post("/api/auth?type=register", {
    userName,
    password,
    passwordConfirmation,
  });

  return {
    data: data,
  };
}
