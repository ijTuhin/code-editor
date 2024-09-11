import { Button } from "@chakra-ui/react";

export default function SignupBtn({ onOpen }) {
  return (
    <Button
      bg={`transparent`}
      h={"fit-content"}
      color={""}
      fontSize={""}
      fontWeight={""}
      px={""}
      // _hover={{ color: "#14b8a6" }}
      _active={{
        color: "#d6d3d1",
        bg: "#724645"
      }}
      onClick={() => onOpen()}
      key="full"
    >
      <button
        className={`border px-3 py-1.5 rounded border-gray-400 hover:bg-[#724645]`}
      >
        Sign Up
      </button>
    </Button>
  );
}
