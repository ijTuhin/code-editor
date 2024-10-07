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
    <div className={`w-full flex justify-center lg:md:mt-20 mt-5 lg:md:mb-0 bg-stone-950 lg:md:px-0 px-10`}>
      <section className={`lg:md:w-[75rem] w-full lg:md:h-[38.4rem] h-full flex flex-col`}>
        <div className="flex lg:md:flex-row flex-col items-center h-full lg:md:gap-x-2 gap-y-3 lg:md:mx-0">
          <div className={`flex flex-col lg:md:w-1/2 w-full h-full`}>
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
          <div className={`bg-stone-950 flex flex-col lg:md:w-1/2 w-full h-full pt-2`}>
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
            <div className={`lg:md:h-full h-[77.85vh] lg:md:bg-stone-400/5 bg-stone-800`}>
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
