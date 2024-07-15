import { Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { FaCode } from "react-icons/fa6";
import { Languages } from "../assets/constantValues";
export default function SelectLanguage({ lang, onSelect }) {
  const languages = Object.entries(Languages);
  return (
    <Menu isLazy>
      <MenuButton w={150}>
        <p
          className={`bg-stone-400/10 px-3 rounded-tr-lg flex items-center divide-x-2 divide-stone-600 gap-1`}
        >
          <span className={`text-stone-500 pr-1.5 py-[0.39rem]`}>
            <FaCode />
          </span>
          <span className={`pl-3 py-[0.39rem] flex-grow text-center`}>
            {lang}
          </span>
        </p>
      </MenuButton>
      <MenuList bg="#1c1917" roundedTopEnd="lg" gap="2">
        {languages.map(([language, version], i) => (
          <MenuItem
            key={i}
            _hover={{ bg: "#44403c" }}
            color={lang === language ? "#ca8a04" : ""}
            bg={lang === language ? "#292524" : "#1c1917"}
            onClick={() => onSelect(language)}
          >
            {language} &nbsp;
            <Text
              as="span"
              color={lang === language ? "#854d0e" : "gray.600"}
              fontSize="sm"
            >
              {version}
            </Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
