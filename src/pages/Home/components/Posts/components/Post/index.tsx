import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  item: {
    id: '';
    title: '';
    community: '';
    icon: '';
    author: '';
    tags: [];
    time: '';
    content: '';
    image: '';
    comments: 0;
    votes: 0;
  };
}
const Post: FC<Props> = ({ item }) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  const _renderVotes = () => {
    return (
      <Flex
        w="fit-content"
        bg={isDarkMode ? '#1a1a1bcc' : '#ffffffcc'}
        direction="column"
        alignItems="center"
        gap={1}
        padding={2}
      >
        <IconButton
          aria-label=""
          icon={<TriangleUpIcon />}
          border="none"
          bg="none"
          size="xs"
        />
        <Text fontWeight={700} fontSize="11px">
          {item.votes === 0 ? 'Vote' : item.votes}
        </Text>
        <IconButton
          aria-label=""
          icon={<TriangleDownIcon />}
          border="none"
          bg="none"
          size="xs"
        />
      </Flex>
    );
  };

  const _renderContent = () => {
    return (
      <Flex flex={1} direction="column">
        <Flex alignItems="center" h="30px" paddingInline={2}>
          <Image
            marginRight={1}
            src={item.icon}
            alt=""
            w="16px"
            h="16px"
            borderRadius="50%"
          />
          <Text fontSize="10px" fontWeight="bold">
            {item.community}
          </Text>
          <Text fontSize="8px" paddingInline={2} color="gray.500">
            -
          </Text>
          <Text fontSize="10px" color="gray.500">
            Posted by {item.author} {item.time}
          </Text>
        </Flex>
        {item.title && (
          <Box padding={2}>
            <Text fontWeight={700} fontSize="14px">
              {item.title}
            </Text>
          </Box>
        )}
        {item.content && (
          <Box paddingInline={2} paddingBottom={4}>
            <Text color="gray.500">{item.content}</Text>
          </Box>
        )}
        {item.image && <Image src={item.image} alt="" />}
      </Flex>
    );
  };
  return (
    <Flex
      borderWidth={1}
      borderRadius={5}
      overflow="hidden"
      bgColor={
        colorMode === 'light' ? 'componentBgColorLight' : 'componentBgColorDark'
      }
    >
      {_renderVotes()}
      {_renderContent()}
    </Flex>
  );
};

export default Post;
