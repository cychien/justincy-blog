import { Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div className="mt-12">
      <Outlet />
    </div>
  );
}
