import { useDisclosure } from "@chakra-ui/react";
import Dropdown from "./Dropdown";
import { PiSignOutBold } from "react-icons/pi";
import ProfileDrawer from "../Profile/ProfileDrawer";
import ProfileBtn from "../Profile/ProfileBtn";
import { useState } from "react";
export default function Nabvar() {
  const [user, SetUser] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <header className={`bg-[#784947] p-3 flex justify-between items-center`}>
        <h1>Code Editor</h1>
        <div className={`text-xs flex items-center gap-x-3`}>
          {user ? <ProfileBtn onOpen={onOpen} /> : <></>}
          <Dropdown />
          <div className={`px-3 border-l border-gray-400`}>
            {user ? (
              <button className={`text-base`}>
                <PiSignOutBold />
              </button>
            ) : (
              <button className={`border px-3 py-1.5 rounded border-gray-400 hover:bg-[#724645]`}>
                Sign Up
              </button>
            )}
          </div>
        </div>
      </header>
      <ProfileDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
}
