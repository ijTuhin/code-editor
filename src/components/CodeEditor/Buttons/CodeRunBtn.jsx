import { BsCaretRightFill } from "react-icons/bs";
import { executeCode } from "../../../assets/api";

export default function CodeRunBtn({ setLoading, setOutput, code, language }) {
  const runCode = async () => {
    if (!code) return;
    setLoading(true);
    try {
      const { run: result } = await executeCode(language, code);
      setOutput(result.output);
    } catch (e) {
      //
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      className="bg-stone-400/10 text-sm px-3 py-1 flex items-center justify-between gap-x-1"
      onClick={runCode}
    >
      <span>Run</span>
      <BsCaretRightFill />
    </button>
  );
}
