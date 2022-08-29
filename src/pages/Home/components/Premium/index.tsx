import {
  Button,
  Center,
  Flex,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { FC } from 'react';

const Premium: FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      padding={4}
      gap={4}
      borderWidth={1}
      borderRadius={5}
      direction="column"
      bgColor={
        colorMode === 'light' ? 'componentBgColorLight' : 'componentBgColorDark'
      }
    >
      <Flex gap={4}>
        <Center>
          <Image
            src="https://www.iconpacks.net/icons/2/free-reddit-logo-icon-2436-thumb.png"
            alt=""
            h="24px"
            w="24px"
          />
        </Center>
        <Flex flex={1} direction="column">
          <Text fontSize="10px" fontWeight="bold">
            Reddit Premium
          </Text>
          <Text fontSize="10px">
            The best Reddit experience, with monthly Coins
          </Text>
        </Flex>
      </Flex>
      <Button bg="primaryColor" borderRadius="30px" color="white">
        Try Now
      </Button>
    </Flex>
  );
};

export default Premium;
