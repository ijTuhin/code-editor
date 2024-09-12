import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Dropdown() {
  return (
    <Menu>
      <MenuButton paddingY='7px' colorScheme="pink">Playground</MenuButton>
      <MenuList color="#3f3f46" bg="#a8a29e" borderColor="#a8a29e" borderRadius="0" borderBottomLeftRadius="10px">
        <MenuItem
          _hover={{
            background: "#737373",
            color: "#a3a3a3"
          }}
          bg="#a8a29e"
          paddingY="10px"
        >
          <Link className={`w-full`} to="/write-code">
            <Flex w="100%" alignItems="center">
              <Text fontSize="sm">Write Code</Text>
              <Spacer />
              <MdOutlineKeyboardArrowRight />
            </Flex>
          </Link>
        </MenuItem>

        <MenuItem
          _hover={{
            background: "#737373",
            color: "#a3a3a3"
          }}
          bg="#a8a29e"
          paddingY="10px"
        >
          <Link className={`w-full`} to="/development">
            <Flex w="100%" alignItems="center">
              <Text fontSize="sm">Development</Text>
              <Spacer />
              <MdOutlineKeyboardArrowRight />
            </Flex>
          </Link>
        </MenuItem>

        <MenuItem
          _hover={{
            background: "#737373",
            color: "#a3a3a3"
          }}
          bg="#a8a29e"
          paddingY="10px"
        >
          <Link className={`w-full`} to="/problem-solving">
            <Flex w="100%" alignItems="center">
              <Text fontSize="sm">Problem Solving</Text>
              <Spacer />
              <MdOutlineKeyboardArrowRight />
            </Flex>
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
