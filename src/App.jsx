import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  const [size, setSize] = useState(true);

  return (
    <main className="bg-stone-950">
      <header className={`border-2 h-16`}></header>
      {/* ==================== Code Editor Section ==================== */}
      <div className={`w-full ${size ? `mt-[4.35rem] h-[38rem]` : `h-full absolute top-0`}`}>
        <div className={`flex justify-center h-full`}>
          <div className={`${size ? `w-[75rem]` : `w-full`} flex flex-col`}>
            {/* ==================== Code Editor Size Btn ==================== */}
            <div className={`w-full flex justify-end bg-stone-300`}>
              <button
                type="button"
                onClick={() => {
                  setSize(!size);
                  console.log(size);
                }}
                className={`p-1`}
              >
                O
              </button>
            </div>
            {/* ==================== Code Editor Box ==================== */}
            <section className={`bg-stone-500 shadow-3xl w-full flex-grow grid grid-cols-2 divide-x-2`}>
              {/* ==================== Code Editor ==================== */}
              <div className={`divide-y-2`}>
                <header className={`px-2.5 py-1  flex flex-col`}>
                  <button type="button" className={`text-left`}>
                    x
                  </button>
                </header>
                <div className="flex-grow"></div>
              </div>
              {/* ==================== Code Editor Console ==================== */}
              <div className={`divide-y-2`}>
                <header className={`px-2.5 py-1  flex flex-col`}>
                  <button type="button" className={`text-left`}>
                    x
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
