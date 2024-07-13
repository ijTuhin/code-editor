import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { TbMaximize } from "react-icons/tb";
import { LuMinimize } from "react-icons/lu";
import { BsCaretRightFill } from "react-icons/bs";
function App() {
  const [size, setSize] = useState(true);

  return (
    <main className="bg-stone-950">
      <header className={`border-2 h-16`}></header>
      {/* ==================== Code Editor Section ==================== */}
      <div
        className={`w-full ${
          size ? `mt-[4.35rem] h-[38rem]` : `h-full absolute top-0`
        }`}
      >
        <div className={`flex justify-center h-full`}>
          <div className={`${size ? `w-[75rem]` : `w-full`} flex flex-col`}>
            {/* ==================== Code Editor Size Btn ==================== */}
            <div className="grid grid-cols-2">
              <div className={`w-full bg-stone-300`}></div>
              <div className={`w-full flex justify-end bg-stone-300`}>
                <button
                  type="button"
                  onClick={() => {
                    setSize(!size);
                    console.log(size);
                  }}
                  className={`py-1.5 px-2 text-gray-500`}
                >
                  {size ? <TbMaximize /> : <LuMinimize />}
                </button>
              </div>
            </div>
            {/* ==================== Code Editor Box ==================== */}
            <section
              className={`bg-stone-500 shadow-3xl w-full flex-grow grid grid-cols-2 divide-x-2`}
            >
              {/* ==================== Code Editor ==================== */}
              <div className={`divide-y-2`}>
                <header className={`px-2.5 py-1`}>
                  <button type="button" className={`text-left`}>
                    x
                  </button>
                </header>
                <div className="flex-grow"></div>
              </div>
              {/* ==================== Code Editor Console ==================== */}
              <div className={`divide-y-2`}>
                <header className={`px-2.5 py-1`}>
                  {/* <button type="button" className={`text-left`}>
                    x
                  </button> */}
                  <button type="button" className={`py-1.5 px-2 text-black`}>
                    {<BsCaretRightFill />}
                  </button>
                </header>
                <div className="flex-grow"></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
