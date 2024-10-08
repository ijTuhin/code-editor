import React from "react";
import SideMainNavBar from "../../Navbar/SideMainNavBar";
import DevSideBar from "./DevSideBar/DevSideBar";
import DevEditorSection from "./DevEditorSection/DevEditorSection";

export default function DevMainUI() {
  return (
    <main className={`bg-stone-950 text-gray-400 lg:h-screen h-fit flex`}>
      <SideMainNavBar />
      <DevSideBar/>
      <DevEditorSection/>
    </main>
  );
}
