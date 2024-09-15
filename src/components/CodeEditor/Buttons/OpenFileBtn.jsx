import { FaFolderOpen } from "react-icons/fa";
import { FileExtension } from "../../../assets/constantValues";

export default function OpenFileBtn({ setValue, lang }) {
  const onOpening = (e) => {
    let reader = new FileReader();
    reader.onload = function (e) {
      setValue(e.target.result);
    };
    reader.readAsText(e.target.files[0]);
  };
  return (
    <label
      className={`bg-stone-400/10 py-1 text-sm px-3 rounded-tl-lg flex items-center justify-between gap-x-1 cursor-pointer`}
    >
      <span className={`lg:md:flex hidden`}>Open</span>
      <FaFolderOpen />
      <input
        type="file"
        accept={`.${FileExtension[lang]}`}
        onChange={onOpening}
        className={`hidden`}
      ></input>
    </label>
  );
}
