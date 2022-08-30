import {
  BellIcon,
  CalendarIcon,
  ChatIcon,
  MoonIcon,
  RepeatIcon,
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
  Select,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import UserProfileModal from 'components/UserProfileModal';
import { login, logout, selectUser } from 'features/userSlice';
import { signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth, provider } from 'services/firebase';
import { useToastHook } from 'utils/notification';
import { APP_NAME } from '../../constants';

const NavigationBar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const {
    isOpen: isUserProfileModalOpen,
    onOpen: onUserProfileModalOpen,
    onClose: onUserProfileModalClose,
  } = useDisclosure();

  const isDarkMode = colorMode === 'dark';
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [toast, newToast] = useToastHook();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        dispatch(
          login({
            email: res.user.email,
            uid: res.user.uid,
            displayName: res.user.displayName,
            photoURL: res.user.photoURL,
          })
        );
        newToast({
          title: 'Logged in successfully.',
          description: 'Welcome to the Lewis App',
          status: 'success',
        });
      })
      .catch((error) => {
        newToast({
          title: 'Login failed',
          description: error.message,
          status: 'error',
        });
      });
  };

  const onLogout = () => {
    dispatch(logout());
    auth.signOut();
    newToast({
      title: 'Logged out',
      // description: '',
      status: 'info',
    });
  };

  const showToast = (content: any, status: any) => {
    newToast({
      title: 'You clicked here.',
      description: content,
      status,
    });
  };

  return (
    <Flex
      paddingBlock={1.5}
      paddingInline={4}
      borderBottomWidth={1}
      h="48px"
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
          fontWeight={700}
          fontSize="16px"
          letterSpacing={1}
          paddingLeft={2}
        >
          {APP_NAME}
        </Text>
      </Center>

      <Center w="15vw">
        <Select icon={<RepeatIcon />} value="Trending" fontWeight={500}>
          <option value="Popular">Popular</option>
          <option value="Hot">Hot</option>
          <option value="Trending">Trending</option>
        </Select>
      </Center>
      <Center flex={1}>
        <InputGroup variant="filled">
          <InputLeftAddon>
            <SearchIcon />
          </InputLeftAddon>
          <Input placeholder="Search..." />
        </InputGroup>
      </Center>

      <Center>
        <Button onClick={() => router.push('/pexels')}>Wallpapers</Button>
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
          onClick={() => router.push('/chat-room')}
          icon={<ChatIcon />}
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
        <Button
          borderRadius="30px"
          color="white"
          bg="linear-gradient(67.9deg,#5349da 11.74%,#b44ac0 88.14%)"
          _hover={{
            bg: 'linear-gradient(67.9deg,#5349da 11.74%,#b44ac0 88.14%)',
          }}
          _active={{
            bg: 'linear-gradient(67.9deg,#5349da 11.74%,#b44ac0 88.14%)',
          }}
        >
          Shop Avatars
        </Button>
      </Center>
      <Center>
        <Menu>
          <MenuButton
            as={Button}
            borderWidth={0}
            bg="none"
            _active={{
              bg: 'none',
            }}
            _hover={{
              bg: 'none',
            }}
          >
            <Flex alignItems="center">
              {user && <Text paddingRight={3}>{user?.displayName}</Text>}
              <Avatar
                boxSize="28px"
                name={user?.displayName}
                src={user?.photoURL}
              >
                {user && <AvatarBadge bg="green" boxSize="0.75em" />}
              </Avatar>
            </Flex>
          </MenuButton>
          <MenuList
            bgColor={
              isDarkMode ? 'componentBgColorDark' : 'componentBgColorLight'
            }
          >
            {!user ? (
              <MenuItem fontWeight={500} onClick={signInWithGoogle}>
                Login with Google
              </MenuItem>
            ) : (
              <>
                <MenuItem fontWeight={500} onClick={onUserProfileModalOpen}>
                  Profile
                </MenuItem>
                <MenuItem fontWeight={500} onClick={onLogout}>
                  Logout
                </MenuItem>
              </>
            )}
          </MenuList>
        </Menu>
      </Center>

      <UserProfileModal
        onClose={onUserProfileModalClose}
        isOpen={isUserProfileModalOpen}
        user={user}
        onLogout={onLogout}
      />
    </Flex>
  );
};

export default NavigationBar;
