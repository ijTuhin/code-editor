import { Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { Languages } from "../constantValues";
export default function SelectLanguage({lang, onSelect}) {
  const language = Object.entries(Languages);
  return (
    <Menu isLazy>
      <MenuButton>
        <p className="bg-stone-400/10 py-2 px-3 rounded-tr-lg">{lang}</p>
      </MenuButton>
      <MenuList w="fit-content" bg="#292524" roundedTopEnd="lg" gap="2">
        {language.map(([lang, version], i) => (
          <MenuItem
            key={i}
            bg="#292524"
            _hover={{ bg: '#44403c' }} onClick={() => onSelect(lang)}
          >
            {lang} &nbsp;
            <Text as="span" color="gray.600" fontSize="sm">
              {version}
            </Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
