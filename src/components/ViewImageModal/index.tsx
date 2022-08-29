import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FC, useEffect } from 'react';

interface Props {
  item: {
    alt: '';
    src: {
      original: '';
    };
  };
  onClose: () => void;
}

const ViewImageModal: FC<Props> = ({ item, onClose }) => {
  const { isOpen, onOpen, onClose: onCloseModal } = useDisclosure();

  const handleClose = () => {
    onCloseModal();
    onClose();
  };

  useEffect(() => {
    if (Object.keys(item || {}).length > 0) {
      onOpen();
    }
  }, [item, onOpen]);

  if (!item) return null;
  return (
    <Modal isCentered isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="auto"
        backdropBlur="2px"
      />
      <ModalContent>
        <ModalHeader>{item.alt}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={item.src?.original} alt={item.alt}></Image>
        </ModalBody>
        <ModalFooter gap={4}>
          <Button colorScheme="red">Download</Button>
          <Button onClick={handleClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ViewImageModal;
