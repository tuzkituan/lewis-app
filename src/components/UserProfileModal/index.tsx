import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  user?: {
    displayName: '';
    email: '';
    photoURL: '';
  };
  onClose: () => void;
  isOpen: boolean;
  onLogout: () => void;
}

const UserProfileModal: FC<Props> = ({ user, onClose, isOpen, onLogout }) => {
  if (!user) return null;
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>User Profile</ModalHeader>
        <ModalBody>
          <Flex gap={4} alignItems="center">
            <Image
              src={user?.photoURL}
              alt=""
              borderRadius="50%"
              w="44px"
              h="44px"
              objectFit="cover"
            />
            <VStack spacing={2} align="stretch">
              <Text>
                <b>Name:</b> {user?.displayName}
              </Text>
              <Text>
                <b>Email:</b> {user?.email}
              </Text>
            </VStack>
          </Flex>
        </ModalBody>
        <ModalFooter gap={4}>
          <Button
            onClick={() => {
              onLogout();
              onClose();
            }}
            colorScheme="red"
          >
            Logout
          </Button>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UserProfileModal;
