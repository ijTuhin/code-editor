import { FaFolderOpen } from "react-icons/fa";

export default function OpenFileBtn() {
  return (
    <button className="bg-stone-400/10 py-1 text-sm px-3 rounded-tl-lg flex items-center justify-between gap-x-1">
      <span>Open</span>
      <FaFolderOpen />
    </button>
  );
}
