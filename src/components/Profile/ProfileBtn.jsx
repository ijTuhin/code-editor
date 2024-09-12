import { Button, Flex } from '@chakra-ui/react'
import { FaCircleUser } from 'react-icons/fa6'

export default function ProfileBtn({onOpen}) {
  return (
    <Button
            bg={`transparent`}
            h={'fit-content'}
            color={""}
            fontSize={""}
            fontWeight={""}
            px={""}
            _hover={{ color: "#14b8a6" }}
            _active={{
              color: "#14b8a6",
            }}
            onClick={() => onOpen()}
          >
            <Flex alignItems="center" columnGap="1.5">
              <span className="text-base mt-0.5">
                <FaCircleUser />
              </span>
              <span>User Profile</span>
            </Flex>
          </Button>
  )
}
