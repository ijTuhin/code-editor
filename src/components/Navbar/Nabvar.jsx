import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import Dropdown from "./Dropdown";
import { FaCircleUser } from "react-icons/fa6";
import { PiSignOutBold } from "react-icons/pi";
import ProfileDrawer from "../Profile/ProfileDrawer";
export default function Nabvar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <header
        className={`bg-emerald-950 p-3 flex justify-between items-center`}
      >
        <h1>Code Editor</h1>
        <div className={`text-sm flex items-center gap-x-3`}>
          <Button
            bg={`transparent`}
            h={'fit-content'}
            color={""}
            fontSize={""}
            fontWeight={""}
            px={""}
            _hover={{ color: "#14b8a6" }}
            _active={{
              color: "#14b8a6",
            }}
            onClick={() => onOpen()}
          >
            <Flex alignItems="center" columnGap="1.5">
              <span className="text-base mt-0.5">
                <FaCircleUser />
              </span>
              <span>User Profile</span>
            </Flex>
          </Button>
          <Dropdown />
          <button className={`text-base px-3 border-l-2 border-gray-600`}>
            <PiSignOutBold />
          </button>
        </div>
      </header>
      <ProfileDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
}
