import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export default function SignupModal({ onClose, isOpen }) {
  const [show, setShow] = useState(false);
  const [registered, setRegistered] = useState(true);
  return (
    <Modal onClose={onClose} size="full" isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent
        w="100%"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#3f3f46"
        color="#d6d3d1"
      >
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody className="w-1/3">
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input placeholder="@email.com" />
          </FormControl>

          {registered ? (
            <FormControl mt={4}>
              <FormLabel>User name</FormLabel>
              <Input placeholder="your name" />
            </FormControl>
          ) : (
            <></>
          )}

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="********"
              />
              <InputRightElement>
                <Button
                  bg=""
                  color="white"
                  _hover={{ color: "#14b8a6", bg: "" }}
                  _active={{ color: "#14b8a6", bg: "" }}
                  size="md"
                  onClick={() => setShow(!show)}
                >
                  {show ? (
                    <Icon size="lg" as={IoMdEyeOff} />
                  ) : (
                    <Icon as={IoMdEye} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Checkbox
            marginY={3}
            onChange={() => {
              setRegistered(!registered);
            }}
          >
            {registered ? "have an account?" : "Not registered?"}
          </Checkbox>
          <Box w="100%" display="flex" alignItems="center" justifyContent="end">
            {registered ? (
              <Button colorScheme="teal" type="submit">
                Log In
              </Button>
            ) : (
              <Button colorScheme="teal" type="submit">
                Sign Up
              </Button>
            )}
          </Box>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
