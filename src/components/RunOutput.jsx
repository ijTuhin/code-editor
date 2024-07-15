export default function RunOutput({output}) {
    console.log(output)
  return <div className="w-1/2 bg-stone-400/5">
    <p className={`p-5 text-gray-500 text-sm`}>{ !output ? "// Run code for output..." : {output}}</p>
  </div>;
}
