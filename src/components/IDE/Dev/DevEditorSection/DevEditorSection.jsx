import React from "react";

export default function DevEditorSection() {
  return (
    <div className={`w-full text-sm`}>
      <nav className={`flex gap-x-1 py-3 border-b border-gray-800 w-full`}>
        <button className={`pl-3 pr-1.5`}>index.html</button>
        <button className={`px-1.5`}>styles.css</button>
        <button className={`px-1.5`}>index.js</button>
      </nav>
      <section className={`p-3`}>Code Section</section>
    </div>
  );
}
