import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";

function CodeEditor() {
  const codeEditorRef = useRef();
  const [value, setValue] = useState("// some comment");
  function onMountEditor(codeEditor) {
    codeEditorRef.current = codeEditor;
    codeEditor.focus()
  }
  return (
    <div className="w-1/2 bg-stone-400/10">
      <Editor
        height="77.42vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={onMountEditor}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </div>
  );
}

export default CodeEditor;
