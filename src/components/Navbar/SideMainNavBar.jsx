import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsQuestionDiamondFill } from "react-icons/bs";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { SiCodefresh } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

export default function SideMainNavBar() {
  const [user, SetUser] = useState(1);
  return (
    <nav
      className={`flex flex-col justify-between items-start lg:h-screen lg:w-fit px-1.5 py-3.5 text-xs bg-stone-900`}
    >
      <h1 className="text-gray-400 text-sm font-mono flex justify-center items-center gap-x-1">
        <span>
          <SiCodefresh />
        </span>
      </h1>
      <div className={`flex flex-col items-start gap-y-3.5`}>
        <button>
          <span className={`text-sm opacity-65`}>
            <AiFillHome />
          </span>
        </button>
        <button>
          <span className={`text-sm opacity-65`}>
            <BsQuestionDiamondFill />
          </span>
        </button>
        <button>
          <span className={`text-sm opacity-65`}>
            <FaCode />
          </span>
        </button>
      </div>
      {user ? (
        <div className={`flex flex-col items-start gap-y-3.5`}>
          <button>
            <span className={`text-sm opacity-65`}>
              <FaUserCircle />
            </span>
          </button>
          <button>
            <span className={`text-sm opacity-65`}>
              <FaSignOutAlt />
            </span>
          </button>
        </div>
      ) : (
        <button>
          <span className={`text-sm opacity-65`}></span>
        </button>
      )}
    </nav>
  );
}
