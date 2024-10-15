import { useState } from "react";
import CreateFolder from "./CreateFolder";
import ChildFolder from "./ChildFolder";

export default function FolderTree() {
  const depth = 0;
  const [tree, setTree] = useState({
    name: "New Folder",
    children: [
      {
        name: "node_modules",
        children: [
          {
            name: ".bin",
          },
          {
            name: ".cache",
          },
        ],
      },
      {
        name: "public",
        children: [
          {
            name: "index.html",
          },
          {
            name: "robots.tsx",
          },
        ],
      },
      {
        name: "src",
        children: [
          {
            name: "components",
          },
        ],
      },
    ],
  });
  return (
    <section
      className={`w-full py-2 px-1.5 relative border-b border-stone-700`}
    >
      {/* ========= Root Folder ========= */}
      <div className={`flex justify-between items-end w-full `}>
        <p className={``}>{tree.name}</p>
        <CreateFolder />
      </div>
      <div className={`mt-1.5 ml-2`}>
        {tree?.children?.map((val, idx) => (
          <ChildFolder key={idx} child={val} depth={depth + 1} />
        ))}
      </div>
    </section>
  );
}
