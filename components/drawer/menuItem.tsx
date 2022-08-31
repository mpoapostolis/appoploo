import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export function MenuItem(props: {
  src?: string;
  goTo: string;
  className?: string;
  children?: ReactNode;
}) {
  const router = useRouter();
  const isActive = router.pathname === props.goTo;
  const iconColor = isActive ? "ddd" : "888";
  return (
    <Link href={props.goTo}>
      <a
        className={clsx(
          "w-12 md:w-full  items-center h-12  justify-start px-3 flex",
          props.className,

          {
            "bg-base-100 ": isActive,
          }
        )}
      >
        <img src={`${props.src}&color=${iconColor}`} alt="" />

        {props.children && <div className="ml-2">{props.children}</div>}
      </a>
    </Link>
  );
}
