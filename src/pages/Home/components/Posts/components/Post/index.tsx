import {
  ChatIcon,
  CheckIcon,
  ExternalLinkIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
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
    upvoted: boolean;
    downvoted: boolean;
  };
}
const Post: FC<Props> = ({ item }) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  const _renderVotes = () => {
    return (
      <Flex
        w="fit-content"
        bg={isDarkMode ? 'blackAlpha.400' : 'gray.100'}
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
          size="sm"
          color={item.upvoted ? 'primaryColor' : ''}
        />
        <Text fontWeight={700} fontSize="11px">
          {item.votes === 0 ? 'Vote' : item.votes}
        </Text>
        <IconButton
          aria-label=""
          icon={<TriangleDownIcon />}
          border="none"
          bg="none"
          size="sm"
          color={item.downvoted ? 'primaryColor' : ''}
        />
      </Flex>
    );
  };

  const _renderContent = () => {
    return (
      <Flex flex={1} direction="column" paddingBlock={1}>
        <Flex alignItems="center" h="30px" paddingInline={2}>
          <Image
            marginRight={1}
            src={item.icon}
            alt=""
            w="16px"
            h="16px"
            borderRadius="50%"
          />
          <Text fontSize="12px" fontWeight="bold">
            {item.community}
          </Text>
          <Text fontSize="8px" paddingInline={2} color="gray.500">
            -
          </Text>
          <Text fontSize="12px" color="gray.500">
            Posted by {item.author} {item.time}
          </Text>
        </Flex>
        {item.title && (
          <Box padding={3}>
            <Text fontWeight={700} fontSize="14px">
              {item.title}
            </Text>
          </Box>
        )}
        {item.content && (
          <Box paddingInline={3} paddingBottom={4}>
            <Text color="gray.500">{item.content}</Text>
          </Box>
        )}
        {item.image && <Image src={item.image} alt="" />}
        {_renderButtons()}
      </Flex>
    );
  };

  const _renderButtons = () => {
    const buttons = [
      {
        icon: <ChatIcon />,
        title: item.comments + ' Comments',
      },
      {
        icon: <ExternalLinkIcon />,
        title: 'Share',
      },
      {
        icon: <CheckIcon />,
        title: 'Save',
      },
    ];
    return (
      <Flex gap={1} padding={1}>
        {buttons.map(({ icon, title }, index) => (
          <Button
            bg="none"
            leftIcon={icon}
            key={index}
            color={isDarkMode ? 'gray.300' : 'gray.500'}
            _active={{
              bg: 'none',
            }}
          >
            {title}
          </Button>
        ))}
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
