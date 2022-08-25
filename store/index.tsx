import create from "zustand";

export type Store = {
  theme: string;
  setTheme: (theme: string) => void;
};

function getTheme() {
  if (typeof window !== "undefined")
    return window.localStorage.getItem("theme") ?? "light";
  else return "light";
}

export const useStore = create<Store>((set) => ({
  theme: getTheme(),
  setTheme: (theme) => set(() => ({ theme })),
}));
