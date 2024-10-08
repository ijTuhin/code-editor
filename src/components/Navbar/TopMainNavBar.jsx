import { useState } from "react";
import { SiCodeceptjs, SiCodefresh } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

export default function TopMainNavBar() {
  const [user, SetUser] = useState(1);
  return (
    <nav className={`flex justify-between px-5 py-2.5 text-xs bg-stone-900`}>
      <h1 className="text-gray-400 text-sm font-mono flex justify-center items-center gap-x-1">
        <span>
          <SiCodeceptjs />
        </span>
        Code Ground
      </h1>
      <div className={`space-x-5`}>
        <button>Home</button>
        <button>About</button>
        <button>Editor</button>
      </div>
      {user ? (
        <div className={`space-x-3.5`}>
          <button>Profile</button>
          <button>Sign Out</button>
        </div>
      ) : (
        <button>Sign Up</button>
      )}
    </nav>
  );
}
