import {
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
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
      <MenuButton colorScheme="pink">Playground</MenuButton>
      <MenuList>
        <Link to="/write-code">
          <MenuItem>
            <Flex w="100%" alignItems="center" columnGap="2">
              <Text fontSize="sm">Write Code</Text>
              <Spacer />
              <span>
                <MdOutlineKeyboardArrowRight />
              </span>
            </Flex>
          </MenuItem>
        </Link>
        <MenuDivider />
        <Link to="/development">
          <MenuItem>
            <Flex w="100%" alignItems="center" columnGap="2">
              <Text fontSize="sm">Development</Text>
              <Spacer />
              <span>
                <MdOutlineKeyboardArrowRight />
              </span>
            </Flex>
          </MenuItem>
        </Link>
        <MenuDivider />
        <Link to="/problem-solving">
          <MenuItem>
            <Flex w="100%" alignItems="center" columnGap="2">
              <Text fontSize="sm">Problem Solving</Text>
              <Spacer />
              <span>
                <MdOutlineKeyboardArrowRight />
              </span>
            </Flex>
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}
