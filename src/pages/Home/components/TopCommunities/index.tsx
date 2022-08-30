import { ChevronUpIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Tag,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { FC } from 'react';

const TopCommunities: FC = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  const items = [
    {
      title: 'r/Steam',
      icon: 'https://b.thumbs.redditmedia.com/xvwxkNXOkvdu9d6S67odp1gCPfhB1A3qKDs7kdwO5ts.png',
    },
    {
      title: 'r/GTA5',
      icon: 'https://styles.redditmedia.com/t5_2wb7y/styles/communityIcon_ugrq3c6jqfm81.png',
    },
    {
      title: 'r/Windows',
      icon: 'https://styles.redditmedia.com/t5_2qgzy/styles/communityIcon_rvt3zjh1fc551.png',
    },
    {
      title: 'r/unixporn',
      icon: 'https://styles.redditmedia.com/t5_2qiq1/styles/communityIcon_dwmyh6nx1n821.png',
    },
    {
      title: 'r/askreddit',
      icon: 'https://styles.redditmedia.com/t5_2qk72/styles/communityIcon_ift6gdjym5d71.jpg?format=pjpg&s=36fec24ce8081b0f714db0e7f2dfe8b08c1ded76',
    },
  ];

  return (
    <Flex
      // padding={4}
      gap={4}
      borderWidth={1}
      overflow="hidden"
      borderRadius={5}
      direction="column"
      bgColor={isDarkMode ? 'componentBgColorDark' : 'componentBgColorLight'}
    >
      <Box
        w="100%"
        paddingTop={8}
        paddingBottom={2}
        paddingLeft={4}
        backgroundImage={`url(https://styles.redditmedia.com/t5_2qwis/styles/bannerBackgroundImage_xsfxgk8a28g01.png)`}
      >
        <Text color="#fff" fontWeight={500} fontSize={16}>
          Top Aww Communities
        </Text>
      </Box>
      <Flex direction="column">
        {items.map((x, i) => {
          return (
            <Flex
              gap={4}
              key={i}
              paddingInline={4}
              paddingBlock={2}
              _hover={{
                backgroundColor: isDarkMode ? 'gray.800' : 'gray.100',
              }}
            >
              <Center>
                <Text>{i + 1}</Text>
              </Center>
              <Center>
                <ChevronUpIcon color="green" boxSize={7} />
              </Center>
              <Center
                flex={1}
                verticalAlign="center"
                justifyContent="flex-start"
              >
                <Image
                  w="16px"
                  h="16px"
                  src={x.icon}
                  alt=""
                  borderRadius="50%"
                  marginRight={4}
                />
                <Text fontWeight={500}>{x.title}</Text>
              </Center>
              <Center>
                <Button size="sm" colorScheme="blue" borderRadius={30}>
                  Join
                </Button>
              </Center>
            </Flex>
          );
        })}
        <Flex direction="column" padding={4} gap={4}>
          <Button colorScheme="blue" w="100%" borderRadius={30}>
            View All
          </Button>
          <HStack spacing={4}>
            {['Top', 'Near You', 'Aww', 'News'].map((size) => (
              <Tag
                size="sm"
                key={size}
                variant="solid"
                borderRadius={30}
                fontSize="11px"
                backgroundColor={isDarkMode ? 'gray.800' : 'gray.200'}
                color="blue.400"
                fontWeight={700}
                cursor="pointer"
              >
                {size}
              </Tag>
            ))}
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TopCommunities;
