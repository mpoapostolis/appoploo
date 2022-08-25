import { ReactNode } from "react";
import { Drawer } from "../drawer";

export function Layout(props: { children: ReactNode }) {
  return (
    <div className="grid md:grid-cols-[3rem_1fr] grid-rows-[3rem_1fr] h-screen">
      <Drawer />
      <div className="w-full h-full">{props.children}</div>
    </div>
  );
}
