import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

export default function ChildFolder({
  child,
  depth,
  setOpennedFile,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIsExpanded((prev) => !prev);
          if (!child?.children) {
            setOpennedFile((prev) => [child?.name, ...prev]);
          }
        }}
        className={`flex items-end gap-x-1 `}
      >
        {child?.children && (
          <div>
            {isExpanded ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
          </div>
        )}
        <span
          className="name"
          style={{ paddingLeft: child?.children ? "" : "0.25rem" }}
        >
          {child?.name}
        </span>
      </button>
      <div className={`border-l border-stone-600/50 m-1.5`}>
        {isExpanded && (
          <div style={{ paddingLeft: `5px` }}>
            {child?.children?.map((child) => (
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
    </>
  );
}
