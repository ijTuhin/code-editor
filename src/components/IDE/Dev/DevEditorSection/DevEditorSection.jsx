import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function DevEditorSection({ opennedFile, setOpennedFile }) {
  const [fileSelected, setFileSelected] = useState(opennedFile[0]);
  return (
    <div className={`w-full text-sm`}>
      <nav
        className={`flex gap-x-1 mt-3 pb-1 px-1.5 border-b border-stone-800 w-full`}
      >
        {opennedFile.map((i, idx) => (
          <button
            onClick={() => setFileSelected(i)}
            key={idx}
            className={`px-1.5 py-1.5 flex items-center relative text-xs gap-x-1 rounded-tl-lg bg-stone-700/40`}
          >
            <span>{i}</span>
            <span className={`relative top-[0.05rem]`}>
              <RxCross2 />
            </span>
          </button>
        ))}
      </nav>
      <section className={`p-3`}>Code Section of {fileSelected}</section>
    </div>
  );
}
