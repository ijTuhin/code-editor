import DevCodeEditor from "../components/Development/DevCodeEditor";
import Nabvar from "../components/Navbar/Nabvar";

export default function DevPage() {
  return (
    <main className={`bg-stone-950 text-gray-400 h-full lg:md:h-screen lg:md:overflow-hidden`}>
      <Nabvar />
      <DevCodeEditor />
    </main>
  );
}
