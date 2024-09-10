import { useRef } from "react";
import { Editor } from "@monaco-editor/react";

export default function EditorBox({lang, value, setValue, height}) {
    const codeEditorRef = useRef();
    function onMountEditor(codeEditor) {
      codeEditorRef.current = codeEditor;
      codeEditor.focus()
    }
    return (
      <div className="bg-stone-400/10">
        <Editor
          height={height}
          language={lang}
          theme="vs-dark"
          onMount={onMountEditor}
          value={value}
          onChange={(value) => setValue(value)}
        />
      </div>
    );
  }
