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
      <MenuButton colorScheme="pink">Profile</MenuButton>
      <MenuList>
        <Link to="/playground">
          <MenuItem>
            <Flex w="100%" alignItems="center" columnGap="2">
              <Text fontSize="sm">Playground</Text>
              <Spacer />
              <span>
                <MdOutlineKeyboardArrowRight />
              </span>
            </Flex>
          </MenuItem>
        </Link>
        <MenuDivider />
        <MenuItem>
          <Flex w="100%" alignItems="center" gap="2">
            <Text fontSize="sm">Project</Text>
            <Spacer />
            <span>
              <MdOutlineKeyboardArrowRight />
            </span>
          </Flex>
        </MenuItem>
        <MenuDivider />
        <MenuItem>
          <Flex w="100%" alignItems="center" gap="2">
            <Text fontSize="sm">Problem Solving</Text>
            <Spacer />
            <span>
              <MdOutlineKeyboardArrowRight />
            </span>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
