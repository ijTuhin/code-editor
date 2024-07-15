const Languages = {
  javascript: "18.15.0",
  // typescript: "5.0.3",
  python: "3.10.0",
  // java: "15.0.2",
  // csharp: "6.12.0",
  php: "8.2.3",
};
const CodeSnippet = {
  javascript: `\nconst greet = "Hello World!"; \n\nconsole.log(greet)\n`,
  // typescript: `\nvar greet:string = "Hello World!"; \n\nconsole.log(greet)\n`,
  python: `\ngreet = "Hello World!" \n\nprint(greet)\n`,
  // java: `\nString greet = "Hello World!"; \n\nSystem.out.println(greet);\n`,
  // csharp: `\nString greet = "Hello World!"; \n\nConsole.WriteLine(greet);\n`,
  php: `\n<?php\n$txt = "Hello World!"; \n\necho $txt;\n`,
}

export {Languages, CodeSnippet}