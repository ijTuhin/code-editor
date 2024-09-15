import { Editor } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import { GrCode } from "react-icons/gr";
import { TbMaximize } from "react-icons/tb";
import styles from "./LivePreview.module.css";
import { CgMinimize } from "react-icons/cg";

export default function DevCodeEditor() {
  const [viewExpanded, setviewExpanded] = useState(false);
  const [SourceCode, setSourceCode] = useState("");
  const [code, setCode] = useState({
    html: `<div class="item">
<h1>Click here for the result!</h1>
<button type="button" onclick="sayhello()">Want a greeting?</button>
</div>`,
    js: `function sayhello(){
document.write("Hey there. What's up?")
}`,
    css: `body{
  margin: 20px 20px 20px 20px;
  display: flex;
  justify-content: center;
}
h1{
  color: darkred;
}
button{
  border-radius: 8px;
  padding: 8px 10px;
  cursor: pointer;
}
button :hover{
  background-color: darkslategray;
}
.item{
  border: 2px solid gray;
  background-color: black;
  border-radius: 10px;
  width: fit-content;
  padding: 20px 50px;
}`,
  });
  const codeEditorRef = useRef();
  function onMountEditor(codeEditor) {
    codeEditorRef.current = codeEditor;
    codeEditor.focus();
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSourceCode(`
        <html>
          <body>${code.html}</body>
          <style>${code.css}</style>
          <script>${code.js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [code]);
  return (
    <main
      className={`lg:md:relative w-full h-full lg:md:h-[calc(100vh-3rem)] lg:md:overflow-hidden lg:md:px-3.5 px-10 lg:md:pt-5 pt-[3rem] pb-1.5  ${
        viewExpanded ? "" : "flex flex-col justify-center items-center"
      }`}
    >
      <div className={`w-full grid lg:md:grid-cols-3 grid-cols-1 gap-x-2`}>
        <div>
          <div className="flex justify-start">
            <p
              className={`py-1.5 px-3 border border-b-0 border-l-0 bg-stone-900 border-gray-600 rounded-tr-lg flex items-center gap-x-2 text-sm text-gray-500`}
            >
              <span className="text-base">
                <GrCode />
              </span>
              <span>HTML</span>
            </p>
          </div>
          <Editor
            height="50vh"
            language={"html"}
            theme="vs-dark"
            onMount={onMountEditor}
            value={code.html}
            onChange={(value) => setCode({ ...code, html: value })}
          />
        </div>
        <div>
          <div className="flex justify-start">
            <p
              className={`py-1.5 px-3 border border-b-0 border-l-0 bg-stone-900 border-gray-600 rounded-tr-lg flex items-center gap-x-2 text-sm text-gray-500`}
            >
              <span className="text-base">
                <GrCode />
              </span>
              <span>Javascript</span>
            </p>
          </div>
          <Editor
            height="50vh"
            language={"javascript"}
            theme="vs-dark"
            onMount={onMountEditor}
            value={code.js}
            onChange={(value) => setCode({ ...code, js: value })}
          />
        </div>
        <div>
          <div className="flex justify-start">
            <p
              className={`py-1.5 px-3 border border-b-0 border-l-0 bg-stone-900 border-gray-600 rounded-tr-lg flex items-center gap-x-2 text-sm text-gray-500`}
            >
              <span className="text-base">
                <GrCode />
              </span>
              <span>CSS</span>
            </p>
          </div>
          <Editor
            height="50vh"
            language={"css"}
            theme="vs-dark"
            onMount={onMountEditor}
            value={code.css}
            onChange={(value) => setCode({ ...code, css: value })}
          />
        </div>
      </div>
      {/* ========== Live Preview ========== */}
      <div
        className={` bg-stone-800 mt-2 w-full h-full flex-grow ${styles.maxView} ${
          viewExpanded ? "lg:md:absolute lg:md:top-0 lg:md:left-0 lg:md:z-10 lg:md:h-full" : ""
        } transition-height duration-700 lg:md:mb-0 mb-10`}
      >
        <div className="bg-stone-800 w-full flex justify-end p-2">
          <button onClick={() => setviewExpanded(!viewExpanded)}>
            {viewExpanded ? <CgMinimize /> : <TbMaximize />}
          </button>
        </div>
        {!code.html ? (
          <div className="w-full flex justify-center items-center">
            <p className="text-3xl font-bold text-stone-950/45">Live Preview</p>
          </div>
        ) : (
          <iframe
            srcDoc={SourceCode}
            title="Live Preview"
            sandbox="allow-scripts"
            width="100%"
            height="100%"
          />
        )}
      </div>
    </main>
  );
}
