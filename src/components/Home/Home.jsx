import { SiSemanticweb } from "react-icons/si";
import TopMainNavBar from "../Navbar/TopMainNavBar";
import { PiCodeThin } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className={`bg-stone-950 text-gray-400 lg:h-screen h-fit`}>
      <TopMainNavBar />
      <div
        className={`w-full flex flex-col justify-center items-center pt-32 gap-y-10`}
      >
        <section className={`w-1/3 grid grid-cols-2 gap-x-10`}>
          <Link to="/dev"
            className={`h-48 flex flex-col justify-center items-center gap-y-2 bg-stone-800/65 hover:bg-stone-800 hover:border-cyan-900`}
          >
            <span className={`text-5xl`}>
              <SiSemanticweb />
            </span>
            <span>Development</span>
          </Link>
          <Link to="/code"
            className={`h-48 flex flex-col justify-center items-center gap-y-1 bg-stone-800/65 hover:bg-stone-800 hover:border-cyan-900`}
          >
            <span className={`text-5xl`}>
              <PiCodeThin />
            </span>
            <span>Write Code</span>
          </Link>
        </section>
        <section className={`w-1/3 border-t border-stone-900 py-5 space-y-3.5`}>
          <p className={`text-stone-600/75 text-sm`}>
            For more feature and personalised space,
          </p>
          <div className={`text-stone-600/75 text-sm space-y-3.5`}>
            <button
              className={` text-sm text-center w-full py-2.5 border border-stone-300 text-stone-400 hover:text-stone-950 hover:bg-white/75 rounded-full`}
            >
              Create an account
            </button>
            <p className={`flex items-center justify-center gap-x-2`}>
              <span className="border-t flex-grow border-stone-700/75"></span>
              <span>OR</span>
              <span className="border-t flex-grow border-stone-700/75"></span>
            </p>
            <button
              className={`text-stone-950 text-sm text-center w-full py-2.5 bg-white hover:bg-white/75 rounded-full flex justify-center items-center gap-x-2`}
            >
              <span className="text-xl mt-0.5">
                <FcGoogle />
              </span>
              <span>Sign up with Google</span>
            </button>
            <p
              className={`text-stone-600/75 text-sm flex justify-center items-center gap-x-2 group`}
            >
              <span>Already have an account?</span>
              <button className="group-hover:underline-offset-2 group-hover:underline">
                Log in
              </button>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
