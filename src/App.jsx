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
import CodeEditor from "./components/CodeEditor";
import SelectLanguage from "./components/SelectLanguage";
import { CodeSnippet } from "./assets/constantValues";
import { useState } from "react";
import RunOutput from "./components/RunOutput";
import { executeCode } from "./assets/api";
import { Spinner } from "@chakra-ui/react";
function App() {
  const [lang, setLang] = useState("javascript");
  const [value, setValue] = useState(CodeSnippet["javascript"]);
  const [output, setOutput] = useState('Click "Run" to see output');
  const [loading, setLoading] = useState(false);
  function onSelect(lang) {
    setLang(lang);
    setValue(CodeSnippet[lang]);
  }
  const runCode = async () => {
    const sourceCode = value;
    if (!sourceCode) return;
    setLoading(true);
    try {
      const { run: result } = await executeCode(lang, value);
      console.log(result.output, typeof result.output);
      setOutput(result.output);
    } catch (e) {
      //
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className={`bg-stone-950 text-gray-400`}>
      <header className={`bg-emerald-950 p-3`}>hjhslafd</header>
      <div className={`w-full flex justify-center mt-20`}>
        <section className={`w-[75rem] h-[38.4rem] flex flex-col`}>
          <div className="w-full grid grid-cols-2 gap-x-1">
            <div className="flex justify-between">
              {/* =================== Select Language Btn ===================== */}
              <SelectLanguage onSelect={onSelect} lang={lang} />
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
              <button
                className="bg-stone-400/10 text-sm px-3 py-1 flex items-center justify-between gap-x-1"
                onClick={runCode}
              >
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
            <CodeEditor lang={lang} value={value} setValue={setValue} />
            {/* =================== Output ===================== */}
            {loading ? (
              <div className={`w-1/2 flex justify-center h-full items-center`}>
                <Spinner speed="0.9s" color="blue.500" size="lg" />
              </div>
            ) : (
              <RunOutput language={lang} value={value} output={output} />
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
