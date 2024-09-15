import { Button, useDisclosure } from "@chakra-ui/react";
import Dropdown from "./Dropdown";
import { PiSignOutBold } from "react-icons/pi";
import ProfileDrawer from "../Profile/ProfileDrawer";
import ProfileBtn from "../Profile/ProfileBtn";
import { useState } from "react";
import SignupModal from "../Authentication/SignupModal";
import SignupBtn from "../Authentication/SignupBtn";
import { RiCodeFill, RiCodeSLine, RiCodeSSlashFill } from "react-icons/ri";
import { TbBrandVscode } from "react-icons/tb";
export default function Nabvar() {
  const [user, SetUser] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <header className={`bg-[#172554] p-3 flex justify-between items-center`}>
        <h1 className="text-gray-400 font-mono flex justify-center items-center gap-x-1">
          <span>
          <TbBrandVscode />
          </span>
          Code Ground
          <span>
            {/* <RiCodeSSlashFill /> */}
          </span>
        </h1>
        <div className={`text-xs flex items-center gap-x-3`}>
          {user ? <ProfileBtn onOpen={onOpen} /> : <></>}
          <Dropdown />
          {/* <div className={`px-3 border-l border-gray-400`}>
            {user ? (
              <button className={`text-base`}>
                <PiSignOutBold />
              </button>
            ) : (
              <SignupBtn onOpen={onOpen} />
            )}
          </div> */}
        </div>
      </header>
      {user ? (
        <ProfileDrawer onClose={onClose} isOpen={isOpen} />
      ) : (
        <SignupModal onClose={onClose} isOpen={isOpen} />
      )}
    </>
  );
}
