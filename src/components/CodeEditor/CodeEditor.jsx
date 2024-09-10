import { useState } from "react";
import { CodeSnippet } from "../../assets/constantValues";
import { Spinner } from "@chakra-ui/react";
import EditorBox from "./EditorBox";
import OpenFileBtn from "./Buttons/OpenFileBtn";
import SaveFileBtn from "./Buttons/SaveFileBtn";
import CopyFileBtn from "./Buttons/CopyFileBtn";
import EditorSettingsBtn from "./Buttons/EditorSettingsBtn";
import CodeRunBtn from "./Buttons/CodeRunBtn";
import EditorSizeBtn from "./Buttons/EditorSizeBtn";
import LanguageSelectorBtn from "./Buttons/LanguageSelectorBtn";
function CodeEditor() {
  const [lang, setLang] = useState("javascript");
  const [value, setValue] = useState(CodeSnippet["javascript"]);
  const [output, setOutput] = useState('Click "Run" to see output');
  const [loading, setLoading] = useState(false);
  function onSelect(lang) {
    setLang(lang);
    setValue(CodeSnippet[lang]);
  }
  return (
    <div className={`w-full flex justify-center mt-20`}>
      <section className={`w-[75rem] h-[38.4rem] flex flex-col`}>
        <div className="flex h-full gap-x-2">
          <div className={`flex flex-col w-1/2 h-full`}>
            <div className="flex justify-between">
              <LanguageSelectorBtn onSelect={onSelect} lang={lang} />
              <div className="divide-x divide-stone-600 flex items-end">
                <OpenFileBtn lang={lang} setValue={setValue} />
                <SaveFileBtn lang={lang} fileToSave={value} />
                <CopyFileBtn textToCopy={value} />
              </div>
            </div>
            <EditorBox lang={lang} value={value} setValue={setValue} height={"77.85vh"} />
          </div>
          <div className={`flex flex-col w-1/2 h-full pt-2`}>
            <div className="flex justify-end items-end pl-2">
              <EditorSettingsBtn />
              <CodeRunBtn
                setLoading={setLoading}
                setOutput={setOutput}
                code={value}
                language={lang}
              />
              <EditorSizeBtn />
            </div>
            {/* =================== Output Box ===================== */}
            <div className={`h-full bg-stone-400/5`}>
              {loading ? (
                <div
                  className={`flex justify-center h-full items-center bg-stone-400/5`}
                >
                  <Spinner speed="0.9s" color="blue.500" size="lg" />
                </div>
              ) : (
                <p className={`p-5 text-gray-500 text-sm`}>{output}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CodeEditor;
