import { Outlet } from "react-router-dom";
import SideMainNavBar from "../components/Navbar/SideMainNavBar";

export default function EditorPage() {
  return (
    <main className={`bg-stone-950 text-gray-400 lg:h-screen h-fit lg:overflow-y-hidden flex`}>
      <SideMainNavBar />
      <Outlet />
    </main>
  );
}
