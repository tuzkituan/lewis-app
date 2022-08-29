import {
  Button,
  Center,
  Flex,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { FC } from 'react';

const CreateFrontPage: FC = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <Flex
      gap={4}
      borderWidth={1}
      borderRadius={5}
      direction="column"
      overflow="hidden"
      bgColor={
        colorMode === 'light' ? 'componentBgColorLight' : 'componentBgColorDark'
      }
    >
      <Flex
        gap={4}
        alignItems="end"
        bgImage={`url(https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png);    background-position-y: -43px;
        background-repeat: no-repeat; `}
        paddingInline={4}
      >
        <Center>
          <Image
            src="https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png"
            alt=""
            w="40px"
            marginTop="20px"
          />
        </Center>
        <Flex flex={1} direction="column">
          <Text fontSize="14px" fontWeight="bold">
            Home
          </Text>
        </Flex>
      </Flex>
      <Flex padding={4} gap={4} direction="column">
        <Text>
          Your personal Reddit frontpage. Come here to check in with your
          favorite communities.
        </Text>
        <Button colorScheme="blue" borderRadius="30px">
          Create Post
        </Button>
        <Button
          bg="white"
          color="black"
          borderRadius="30px"
          borderColor={isDarkMode ? 'borderColorDark' : 'borderColorLight'}
          borderWidth={1}
        >
          Create Community
        </Button>
      </Flex>
    </Flex>
  );
};

export default CreateFrontPage;
