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
import { saveImage } from 'utils/saveImage';

interface Props {
  item: any;
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
    <Modal isCentered isOpen={isOpen} onClose={handleClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{item.alt}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Photographer: <b>{item.photographer}</b>
          </Text>
          <Image marginTop={4} src={item.src?.original} alt={item.alt}></Image>
        </ModalBody>
        <ModalFooter gap={4}>
          <Button
            colorScheme="red"
            onClick={() => {
              saveImage(item.src?.original, item?.id);
            }}
          >
            Download
          </Button>
          <Button onClick={handleClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ViewImageModal;
