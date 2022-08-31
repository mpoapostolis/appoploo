import { ReactNode } from "react";

import { AdminMenu } from "../drawer/adminMenu";

export function AdminLayout(props: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[150px_1fr]  h-screen">
      <AdminMenu />
      <div className="w-full p-8 h-full">{props.children}</div>
    </div>
  );
}
