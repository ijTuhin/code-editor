import React from "react";
import Nabvar from "../components/Navbar/Nabvar";
import CodeEditor from "../components/CodeEditor/CodeEditor";

export default function WriteCodePage() {
  return (
    <main className={`bg-stone-950 text-gray-400`}>
      <Nabvar />
      <CodeEditor />
    </main>
  );
}
