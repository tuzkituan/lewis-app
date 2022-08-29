import { SearchIcon } from '@chakra-ui/icons';
import {
  Avatar,
  AvatarBadge,
  Button,
  Center,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Menu,
  MenuButton,
  MenuCommand,
  MenuItem,
  MenuList,
  Select,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { APP_NAME } from '../../constants';
const NavigationBar: FC = () => {
  const router = useRouter();

  const onSearch = (e: any) => {
    if (e.key === 'Enter') {
      router.push(`/?search=` + e.target.value);
    }
  };

  return (
    <Flex
      backgroundColor="componentBackgroundColor"
      paddingBlock={1.5}
      paddingInline={4}
      borderBottomColor="primaryBorderColor"
      borderBottomWidth={1}
      gap={4}
      as="header"
      position="fixed"
      w="100%"
      top={0}
    >
      <Center>
        <Image boxSize="32px" objectFit="cover" src="/images/logo.jpg" alt="" />
      </Center>
      <Center>
        <Text fontWeight={500} fontSize="16px" letterSpacing={1}>
          {APP_NAME}
        </Text>
      </Center>
      <Spacer />
      <Center flex={1}>
        <InputGroup
          size="lg"
          borderColor="primaryBorderColor"
          variant="filled"
          height="38px"
        >
          <InputLeftAddon>
            <SearchIcon />
          </InputLeftAddon>
          <Input placeholder="Search Pexels..." onKeyDown={onSearch} />
        </InputGroup>
      </Center>

      <Spacer />
      <Center>
        <Menu>
          <MenuButton
            height="38px"
            as={Button}
            borderWidth={0}
            backgroundColor="componentBackgroundColor"
          >
            <Flex alignItems="center">
              <Avatar
                boxSize="28px"
                name="Lewis Nguyen"
                src="https://bit.ly/dan-abramov"
                borderColor="primaryBorderColor"
              >
                <AvatarBadge
                  bg="green"
                  borderColor="papayawhip"
                  boxSize="0.75em"
                />
              </Avatar>
            </Flex>
          </MenuButton>
          <MenuList backgroundColor="componentBackgroundColor">
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
