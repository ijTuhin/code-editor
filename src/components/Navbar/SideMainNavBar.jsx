import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsQuestionDiamondFill } from "react-icons/bs";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { SiCodefresh } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import ProfileDrawer from "../Profile/ProfileDrawer";

export default function SideMainNavBar() {
  const [user, SetUser] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <nav
        className={`flex flex-col justify-between items-start lg:h-screen lg:w-fit px-2 py-3.5 text-xs bg-stone-900`}
      >
        <h1 className="text-gray-400 text-sm font-mono flex justify-center items-center gap-x-1">
          <span>
            <TbBrandVscode />
          </span>
        </h1>
        <div className={`flex flex-col items-start gap-y-5`}>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "opacity-100 text-gray-300"
                : ""
            }
            to="/"
          >
            <span className={`text-base hover:opacity-100 opacity-65`}>
              <AiFillHome />
            </span>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "opacity-100 text-gray-300"
                : ""
            }
            to="/about"
          >
            <span className={`text-base hover:opacity-100 opacity-65`}>
              <BsQuestionDiamondFill />
            </span>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "opacity-100 text-gray-300"
                : ""
            }
            to="/editor"
          >
            <span className={`text-base hover:opacity-100 opacity-65`}>
              <FaCode />
            </span>
          </NavLink>
        </div>
        {user ? (
          <div className={`flex flex-col items-start gap-y-3.5`}>
            <button onClick={() => onOpen()}>
              <span className={`text-base hover:opacity-100 opacity-65`}>
                <FaUserCircle />
              </span>
            </button>
            <button>
              <span className={`text-base hover:opacity-100 opacity-65`}>
                <FaSignOutAlt />
              </span>
            </button>
          </div>
        ) : (
          <button>
            <span className={`text-base hover:opacity-100 opacity-65`}></span>
          </button>
        )}
      </nav>
      {user ? (
        <ProfileDrawer onClose={onClose} isOpen={isOpen} />
      ) : (
        <></>
      )}
    </>
  );
}
