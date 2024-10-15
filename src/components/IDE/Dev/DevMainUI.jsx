import SideMainNavBar from "../../Navbar/SideMainNavBar";
import DevSideBar from "./DevSideBar/DevSideBar";
import DevEditorSection from "./DevEditorSection/DevEditorSection";
import { useState } from "react";

export default function DevMainUI() {
  const [opennedFile, setOpennedFile] = useState([]);
  return (
    <main className={`bg-stone-950 text-gray-400 lg:h-screen h-fit flex`}>
      <SideMainNavBar />
      <DevSideBar opennedFile={opennedFile} setOpennedFile={setOpennedFile} />
      {opennedFile.length !== 0 ? (
        <DevEditorSection
          opennedFile={opennedFile}
          setOpennedFile={setOpennedFile}
        />
      ) : (
        <></>
      )}
    </main>
  );
}
