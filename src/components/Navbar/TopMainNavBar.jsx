import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { SiCodeceptjs, SiCodefresh } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import ProfileDrawer from "../Profile/ProfileDrawer";

export default function TopMainNavBar() {
  const [user, SetUser] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <nav className={`flex justify-between px-5 py-2.5 text-xs bg-stone-900`}>
        <h1 className="text-gray-400 text-sm font-mono flex justify-center items-center gap-x-1">
          <span>
            <SiCodeceptjs />
          </span>
          Code Ground
        </h1>
        <div className={`space-x-5`}>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline underline-offset-4 text-gray-300"
                : ""
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline underline-offset-4 text-gray-300"
                : ""
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline underline-offset-4 text-gray-300"
                : ""
            }
            to="/editor"
          >
            Editor
          </NavLink>
        </div>
        {user ? (
          <div className={`space-x-3.5`}>
            <button onClick={() => onOpen()}>Profile</button>
            <button>Sign Out</button>
          </div>
        ) : (
          <button>Sign Up</button>
        )}
      </nav>
      {user ? <ProfileDrawer onClose={onClose} isOpen={isOpen} /> : <></>}
    </>
  );
}
