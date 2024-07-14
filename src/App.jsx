// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { LuMinimize } from "react-icons/lu";
import { BsCaretRightFill } from "react-icons/bs";
import { LuSave, LuMaximize } from "react-icons/lu";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
function App() {
  // const [size, setSize] = useState(true);

  return (
    <main className={`bg-stone-950 text-gray-400`}>
      <header className={`bg-emerald-950 p-3`}>hjhslafd</header>
      <div className={`w-full flex justify-center mt-20`}>
        <section className={`w-[75rem] h-[38.4rem] flex flex-col`}>
          <div className="w-full grid grid-cols-2 gap-x-1">
            <div className="flex justify-between">
            {/* =================== Select Language Btn ===================== */}
              <button className="bg-stone-400/10 py-2 px-3 rounded-tr-lg">
                JavaScript
              </button>
              {/* =================== File Options Btn ===================== */}
              <div className="divide-x divide-stone-600 flex items-end">
                <button className="bg-stone-400/10 py-1 text-sm px-3 rounded-tl-lg flex items-center justify-between gap-x-1">
                  <span>Open</span>
                  <FaFolderOpen />
                </button>
                <button className="bg-stone-400/10 py-1 text-sm px-3 flex items-center justify-between gap-x-1">
                  <span>Save</span>
                  <LuSave />
                </button>
                <button className="bg-stone-400/10 py-1 text-sm px-3 rounded-tr-lg flex items-center justify-between gap-x-1">
                  <span>Copy</span>
                  <MdOutlineContentCopy />
                </button>
              </div>
            </div>
            <div className="flex justify-end items-end pl-2">
            {/* =================== Settings Btn ===================== */}
              <button className="bg-stone-400/10 px-3 py-1.5  rounded-tl-lg border-r border-r-stone-600">
                <IoSettingsSharp />
              </button>
              {/* =================== Run Btn ===================== */}
              <button className="bg-stone-400/10 text-sm px-3 py-1 flex items-center justify-between gap-x-1">
                <span>Run</span>
                <BsCaretRightFill />
              </button>
              {/* =================== Size Max-Minimizer ===================== */}
              <button className="py-1.5 px-3.5 text-sm rounded-tl-lg">
                <LuMaximize />
              </button>
            </div>
          </div>
          {/* =================== Code Editor Box ===================== */}
          <div className="flex h-full divide-x-2 divide-gray-500">
          {/* =================== Code ===================== */}
            <div className="w-1/2 bg-stone-400/10"></div>
            {/* =================== Output ===================== */}
            <div className="w-1/2 bg-stone-400/5"></div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
