import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import ProfileDrawerView from "./DrawerView/ProfileDrawerView";

export default function ProfileDrawer({ onClose, isOpen }) {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="xl" >
      <DrawerOverlay />
      <DrawerContent bg="#1c1917" boxShadow="2xl" color="#737373">
        {/* <DrawerCloseButton /> */}
        {/* <DrawerHeader>{`drawer contents`}</DrawerHeader> */}
        <DrawerBody>
          <ProfileDrawerView/>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
