import { Outlet } from "react-router";

function DefaultLayout() {
  return (
    <div className="h-screen min-w-[1440px]">
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
