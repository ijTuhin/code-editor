import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsQuestionDiamondFill } from "react-icons/bs";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";

export default function TopMainNavBar() {
  const [user, SetUser] = useState(1);
  const [pos, SetPos] = useState("side");
//   const [tooltip, SetTooltip] = useState({
//     btn: "",
//     body: <></>,
//   });
  return (
    <nav
      className={`flex ${
        pos === "top"
          ? "justify-between px-5 py-2.5"
          : "flex-col justify-between items-start lg:h-screen lg:w-fit px-1.5 py-3.5"
      } text-xs bg-stone-900`}
    >
      <h1 className="text-gray-400 text-sm font-mono flex justify-center items-center gap-x-1">
        <span>
          <TbBrandVscode />
        </span>
        <span className={`${pos === "top" ? "inline" : "hidden"}`}>
          Code Ground
        </span>
      </h1>
      <div
        className={`flex ${
          pos === "top" ? " gap-x-3.5" : "flex-col items-start gap-y-3.5"
        }`}
      >
        <button>
          <span className={`${pos === "top" ? "inline" : "hidden"}`}>Home</span>
          <span
            className={`${pos === "top" ? "hidden" : "text-sm opacity-65"}`}
          >
            <AiFillHome />
          </span>
        </button>
        <button>
          <span className={`${pos === "top" ? "inline" : "hidden"}`}>
            About
          </span>
          <span
            className={`${pos === "top" ? "hidden" : "text-sm opacity-65"}`}
          >
            <BsQuestionDiamondFill />
          </span>
        </button>
        <button>
          <span className={`${pos === "top" ? "inline" : "hidden"}`}>
            Editor
          </span>
          <span
            className={`${pos === "top" ? "hidden" : "text-sm opacity-65"}`}
          >
            <FaCode />
          </span>
        </button>
      </div>
      {user ? (
        <div
          className={`flex ${
            pos === "top" ? " gap-x-3.5" : "flex-col items-start gap-y-3.5"
          }`}
        >
          <button>
            <span className={`${pos === "top" ? "inline" : "hidden"}`}>
              Profile
            </span>
            <span
              className={`${pos === "top" ? "hidden" : "text-sm opacity-65"}`}
            >
              <FaUserCircle />
            </span>
          </button>
          <button>
            <span className={`${pos === "top" ? "inline" : "hidden"}`}>
              Sign Out
            </span>
            <span
              className={`${pos === "top" ? "hidden" : "text-sm opacity-65"}`}
            >
              <FaSignOutAlt />
            </span>
          </button>
        </div>
      ) : (
        <button>
          <span className={`${pos === "top" ? "inline" : "hidden"}`}>
            Sign Up
          </span>
          <span
            className={`${pos === "top" ? "hidden" : "text-sm opacity-65"}`}
          ></span>
        </button>
      )}
    </nav>
  );
}
