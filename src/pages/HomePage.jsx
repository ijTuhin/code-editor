import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <main className={`bg-stone-950 text-gray-400 lg:h-screen h-fit lg:overflow-y-hidden`}>
      <Outlet />
    </main>
  );
}
