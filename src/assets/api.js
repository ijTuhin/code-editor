import axios from "axios";
import { Languages } from "./constantValues";

const api = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode) => {
  const res = await api.post("/execute", {
    "language": language,
    "version": Languages[language],
    "files": [
      {
        "content": sourceCode,
      },
    ],
  });
  return res.data
};
