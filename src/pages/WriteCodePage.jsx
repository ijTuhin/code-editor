import Nabvar from "../components/Navbar/Nabvar";
import CodeEditor from "../components/CodeEditorComp/CodeEditor";

export default function WriteCodePage() {
  return (
    <main className={`bg-stone-950 text-gray-400 lg:md:h-screen h-fit lg:md:overflow-hidden`}>
      <Nabvar />
      <CodeEditor />
    </main>
  );
}
