import FileSaver from "file-saver";
import { LuSave } from "react-icons/lu";
import { FileExtension } from "../../../assets/constantValues";

export default function SaveFileBtn({fileToSave, lang}) {
  function toSaveFile() {
    var file = new Blob([fileToSave], {
      type: "text/plain;charset=utf-8",
    });
    FileSaver.saveAs(file, `untitled.${FileExtension[lang]}`);
  }
  return (
    <button
      onClick={toSaveFile}
      className="bg-stone-400/10 py-1 text-sm px-3 flex items-center justify-between gap-x-1"
    >
      <span className={`lg:md:flex hidden`}>Save</span>
      <LuSave />
    </button>
  );
}
