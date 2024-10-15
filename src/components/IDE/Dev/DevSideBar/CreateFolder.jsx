import { AiFillFileAdd, AiFillFolderAdd } from "react-icons/ai";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

export default function CreateFolder() {
  return (
    <div className={`flex items-end gap-x-1 text-[1.1rem]`}>
      <button className={``}>
        <AiFillFileAdd />
      </button>
      <button className={`relative top-[0.115rem] text-[1.15rem]`}>
        <AiFillFolderAdd />
      </button>
      <button className={`-m-px`}>
        <PiDotsThreeVerticalBold />
      </button>
    </div>
  );
}
