import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  const [size, setSize] = useState(false);

  return (
    <main className="">
      <header className={`border-2 h-16`}></header>
      {/* ==================== Code Editor Section ==================== */}
      <div className={`w-full absolute bottom-0 ${size ? `h-[38rem]` : `h-full`}`}>
        <div className={`flex justify-center h-full`}>
          <div className={`${size ? `w-[75rem]` : `w-full`}`}>
            {/* ==================== Code Editor Size Btn ==================== */}
            <div className={`w-full flex justify-end`}>
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
            <section className={`bg-red-100 border-2 w-full h-full grid grid-cols-2`}>
              {/* ==================== Code Editor ==================== */}
              <div className={`border-2 border-black`}>
                <header className={`px-2.5 py-1 border-2 border-black grid grid-cols-1`}>
                  <button type="button" className={`text-left`}>
                    x
                  </button>
                </header>
                <div></div>
              </div>
              {/* ==================== Code Editor Console ==================== */}
              <div className={`border-2 border-black`}>
                <header className={`px-2.5 py-1 border-2 border-black grid grid-cols-1`}>
                  <button type="button" className={`text-left`}>
                    x
                  </button>
                </header>
                <div></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
