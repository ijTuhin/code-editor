import { Editor } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import { GrCode } from "react-icons/gr";
export default function DevCodeEditor() {
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
}
h1{
  color: darkred;
}
button{
  border-radius: 8px;
  padding: 8px 10px;
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
      className={`relative w-full h-[calc(100vh-3rem)] flex flex-col justify-center items-center px-3.5 pt-5 pb-1.5 gap-y-2`}
    >
      <div className={`w-full grid grid-cols-3 gap-x-2`}>
        <div>
          <p
            className={`py-1 flex justify-start items-center gap-x-2 text-sm text-gray-500`}
          >
            <span className="text-base">
              <GrCode />
            </span>
            <span>HTML</span>
          </p>
          <Editor
            height="60.85vh"
            language={"html"}
            theme="vs-dark"
            onMount={onMountEditor}
            value={code.html}
            onChange={(value) => setCode({ ...code, html: value })}
          />
        </div>
        <div>
          <p
            className={`py-1 flex justify-start items-center gap-x-2 text-sm text-gray-500`}
          >
            <span className="text-base">
              <GrCode />
            </span>
            <span>Javascript</span>
          </p>
          <Editor
            height="60.85vh"
            language={"javascript"}
            theme="vs-dark"
            onMount={onMountEditor}
            value={code.js}
            onChange={(value) => setCode({ ...code, js: value })}
          />
        </div>
        <div>
          <p
            className={`py-1 flex justify-start items-center gap-x-2 text-sm text-gray-500`}
          >
            <span className="text-base">
              <GrCode />
            </span>
            <span>CSS</span>
          </p>
          <Editor
            height="60.85vh"
            language={"css"}
            theme="vs-dark"
            onMount={onMountEditor}
            value={code.css}
            onChange={(value) => setCode({ ...code, css: value })}
          />
        </div>
      </div>
      <div className={` bg-stone-800 w-full min-h-max flex-grow`}>
        {!code.html ? (
          <div className="h-full w-full flex justify-center items-center">
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
