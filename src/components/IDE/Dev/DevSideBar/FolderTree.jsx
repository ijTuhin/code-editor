import { useState } from "react";
import CreateFolder from "./CreateFolder";
import ChildFolder from "./ChildFolder";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

export default function FolderTree({ opennedFile, setOpennedFile }) {
  const depth = 0;
  const [isExpanded, setIsExpanded] = useState(false);
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
            children: [{ name: "home" }],
          },
        ],
      },
    ],
  });
  return (
    <section
      className={`w-full py-2 px-1.5 relative border-b border-stone-700/60`}
    >
      {/* ========= Root Folder ========= */}
      <section className={`flex justify-between items-end w-full `}>
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className={`flex items-end gap-x-1 `}
        >
          <div>
            {isExpanded ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
          </div>
          <span className="name">{tree.name}</span>
        </button>
        <CreateFolder setTree={setTree} />
      </section>

      {/* ============ Child Folder/Files ============ */}
      <div className={`border-l border-stone-600/50 m-1.5`}>
        {isExpanded && (
          <div style={{ paddingLeft: `5px` }}>
            {tree.children?.map((child) => (
              <ChildFolder
                key={child.name}
                child={child}
                depth={depth + 1}
                setOpennedFile={setOpennedFile}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
