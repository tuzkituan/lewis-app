import { LinkIcon, PlusSquareIcon } from '@chakra-ui/icons';
import {
  Avatar,
  AvatarBadge,
  Center,
  Flex,
  IconButton,
  Input,
  Toast,
  useColorMode,
  useToast,
} from '@chakra-ui/react';
import { FC } from 'react';

const CreatePost: FC = () => {
  const { colorMode } = useColorMode();
  const toast = useToast();

  const showToast = () => {
    toast({
      title: 'Hi.',
      description: "We've created a post for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'bottom-right',
    });
  };

  return (
    <Flex
      padding={4}
      gap={4}
      borderWidth={1}
      borderRadius={5}
      bgColor={
        colorMode === 'light' ? 'componentBgColorLight' : 'componentBgColorDark'
      }
      zIndex={1}
    >
      <Center>
        <Avatar
          boxSize="28px"
          name="Lewis Nguyen"
          src="https://bit.ly/dan-abramov"
        >
          <AvatarBadge bg="green" boxSize="0.75em" />
        </Avatar>
      </Center>
      <Center flex={1}>
        <Input placeholder="Create Post"></Input>
      </Center>
      <Center>
        <IconButton
          aria-label="Insert links"
          icon={<PlusSquareIcon />}
          onClick={showToast}
        />
      </Center>
      <Center>
        <IconButton
          aria-label="Insert links"
          icon={<LinkIcon />}
          onClick={showToast}
        />
      </Center>
    </Flex>
  );
};

export default CreatePost;
