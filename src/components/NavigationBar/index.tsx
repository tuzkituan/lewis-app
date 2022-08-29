import {
  BellIcon,
  CalendarIcon,
  EmailIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from '@chakra-ui/icons';
import {
  Avatar,
  AvatarBadge,
  Button,
  Center,
  Flex,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useColorMode,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { APP_NAME } from '../../constants';

const NavigationBar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  const router = useRouter();
  const toast = useToast();

  const showToast = (content: any, status: any) => {
    toast({
      title: 'You clicked here.',
      description: content,
      status,
      duration: 9000,
      isClosable: true,
      position: 'bottom-right',
    });
  };

  const pushRouter = (renderQuery: any) => {
    return router.push({
      pathname: '/pexels',
      query: {
        ...router.query,
        ...renderQuery,
      },
    });
  };

  const onSearch = (e: any) => {
    if (e.key === 'Enter') {
      pushRouter({
        search: e.target.value,
      });
    }
  };

  return (
    <Flex
      paddingBlock={1.5}
      paddingInline={4}
      borderBottomWidth={1}
      gap={4}
      as="header"
      position="fixed"
      w="100%"
      zIndex={1000}
      top={0}
      backgroundColor={
        isDarkMode ? 'componentBgColorDark' : 'componentBgColorLight'
      }
    >
      <Center onClick={() => router.push('/')} cursor="pointer">
        <Image
          boxSize="32px"
          objectFit="cover"
          src="/images/reddit.png"
          alt=""
        />
        <Text
          fontWeight={500}
          fontSize="16px"
          letterSpacing={1}
          paddingLeft={2}
        >
          {APP_NAME}
        </Text>
      </Center>
      <Center>
        <Button onClick={() => router.push('/pexels')} border="none" bg="none">
          Wallpapers
        </Button>
      </Center>
      <Center>
        <InputGroup variant="filled">
          <Input placeholder="Search Wallpapers..." onKeyDown={onSearch} />
        </InputGroup>
      </Center>
      <Center flex={1}>
        <InputGroup variant="filled">
          <InputLeftAddon>
            <SearchIcon />
          </InputLeftAddon>
          <Input placeholder="Search..." onKeyDown={onSearch} />
        </InputGroup>
      </Center>

      <Center>
        <IconButton
          aria-label=""
          onClick={() => showToast('Calendar', 'success')}
          icon={<CalendarIcon />}
        />
      </Center>
      <Center>
        <IconButton
          aria-label=""
          onClick={() => showToast('Notifications', 'error')}
          icon={<BellIcon />}
        />
      </Center>
      <Center>
        <IconButton
          aria-label=""
          onClick={() => showToast('Emails', 'info')}
          icon={<EmailIcon />}
        />
      </Center>
      <Center>
        <IconButton
          aria-label="Toggle theme"
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        />
      </Center>
      <Center>
        <Button onClick={() => router.push('/')}>Blog</Button>
      </Center>

      <Center>
        <Menu>
          <MenuButton as={Button} borderWidth={0}>
            <Flex alignItems="center">
              <Avatar
                boxSize="28px"
                name="Lewis Nguyen"
                src="https://bit.ly/dan-abramov"
              >
                <AvatarBadge bg="green" boxSize="0.75em" />
              </Avatar>
            </Flex>
          </MenuButton>
          <MenuList
            bgColor={
              isDarkMode ? 'componentBgColorDark' : 'componentBgColorLight'
            }
          >
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Center>
    </Flex>
  );
};

export default NavigationBar;
