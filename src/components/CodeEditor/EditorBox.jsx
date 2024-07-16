import { useRef } from "react";
import { Editor } from "@monaco-editor/react";

export default function EditorBox({lang, value, setValue}) {
    const codeEditorRef = useRef();
    function onMountEditor(codeEditor) {
      codeEditorRef.current = codeEditor;
      codeEditor.focus()
    }
    return (
      <div className="bg-stone-400/10">
        <Editor
          height="77.85vh"
          language={lang}
          theme="vs-dark"
          onMount={onMountEditor}
          value={value}
          onChange={(value) => setValue(value)}
        />
      </div>
    );
  }
