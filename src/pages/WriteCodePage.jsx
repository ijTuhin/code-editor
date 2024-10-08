import Nabvar from "../components/Navbar/Nabvar";
import CodeEditor from "../components/CodeEditorComp/CodeEditor";
import SideMainNavBar from "../components/Navbar/SideMainNavBar";

export default function WriteCodePage() {
  return (
    <main className={`bg-stone-950 text-gray-400 lg:md:h-screen h-fit lg:md:overflow-y-hidden flex`}>
      <SideMainNavBar/>
      <CodeEditor />
    </main>
  );
}
