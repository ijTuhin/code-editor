import FolderTree from "./FolderTree";

export default function DevSideBar() {
  return (
    <nav
      className={`flex flex-col items-start lg:h-screen lg:w-56 text-xs bg-gray-400/15 mx-0.5`}
    >
      <FolderTree />
    </nav>
  );
}
