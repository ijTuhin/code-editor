import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { IoCheckmarkDone } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";

export default function CopyFileBtn({ textToCopy }) {
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    if (isCopied) setTimeout(() => setIsCopied(false), 3000);
  }, [isCopied]);
  return (
    <CopyToClipboard text={textToCopy} onCopy={() => setIsCopied(true)}>
      {textToCopy && !isCopied ? (
        <button
          className={`bg-stone-400/10 py-1 text-sm px-3 rounded-tr-lg flex items-center justify-between gap-x-1 cursor-pointer`}
        >
          <span className={`lg:md:flex hidden`}>Copy</span>
          <MdOutlineContentCopy />
        </button>
      ) : (
        <button
          disabled
          className={`bg-stone-400/10 py-1 text-sm px-3 rounded-tr-lg flex items-center justify-between gap-x-1 cursor-text ${
            isCopied && "text-stone-500/80"
          }`}
        >
          <span className={`lg:md:flex hidden`}>
            {isCopied ? "Copied" : "Copy"}
          </span>
          <IoCheckmarkDone />
        </button>
      )}
    </CopyToClipboard>
  );
}
