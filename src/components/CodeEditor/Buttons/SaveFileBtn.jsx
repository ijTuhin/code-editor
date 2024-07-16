import { LuSave } from "react-icons/lu";

export default function SaveFileBtn() {
  return (
    <button className="bg-stone-400/10 py-1 text-sm px-3 flex items-center justify-between gap-x-1">
      <span>Save</span>
      <LuSave />
    </button>
  );
}
