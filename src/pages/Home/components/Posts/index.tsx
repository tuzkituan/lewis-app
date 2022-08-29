import { Flex, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';

const Posts: FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      padding={4}
      gap={4}
      borderWidth={1}
      borderRadius={5}
      bgColor={
        colorMode === 'light' ? 'componentBgColorLight' : 'componentBgColorDark'
      }
    >
      Posts
    </Flex>
  );
};

export default Posts;
