import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
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
          <span>Copy</span>
          <MdOutlineContentCopy />
        </button>
      ) : (
        <button
          disabled
          className={`bg-stone-400/10 py-1 text-sm px-3 rounded-tr-lg flex items-center justify-between gap-x-1 cursor-text`}
        >
          <span>{isCopied ? "Copied" : "Copy"}</span>
          <MdOutlineContentCopy />
        </button>
      )}
    </CopyToClipboard>
  );
}
