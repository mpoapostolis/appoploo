import { MenuItem } from "./menuItem";

export function AdminMenu() {
  return (
    <div className="border-white border-opacity-10 border-r sticky  top-0 z-50 flex flex-col bg-base-200  w-full   h-screen">
      <MenuItem
        src="https://s2.svgbox.net/materialui.svg?ic=navigation"
        goTo="/admin"
      >
        Devices
      </MenuItem>
      <div className=" md:mb-auto mx-auto md:w-full" />

      <form method="POST" action="/api/auth?type=logout">
        <button
          type="submit"
          className="w-12 md:w-full items-center h-12  pl-4 justify-start flex"
        >
          <img
            src={`https://s2.svgbox.net/materialui.svg?ic=logout&color=888`}
            alt=""
            className="mr-2"
          />
          Logout
        </button>
      </form>
    </div>
  );
}
