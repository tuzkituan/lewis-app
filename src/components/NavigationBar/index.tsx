import {
  Avatar,
  AvatarBadge,
  Button,
  Center,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { APP_NAME } from '../../constants';
import { FC } from 'react';
import {
  CalendarIcon,
  ChatIcon,
  ExternalLinkIcon,
  InfoIcon,
  SearchIcon,
  UpDownIcon,
} from '@chakra-ui/icons';
const NavigationBar: FC = () => {
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
    >
      <Center>
        <Image boxSize="32px" objectFit="cover" src="/images/logo.png" alt="" />
      </Center>
      <Center>
        <Text fontWeight={500} fontSize="16px" letterSpacing={1}>
          {APP_NAME}
        </Text>
      </Center>
      <Center w="18%">
        <Select
          borderColor="primaryBorderColor"
          placeholder="Popular"
          size="lg"
          height="38px"
        />
      </Center>
      <Center flex={1}>
        <Select
          borderColor="primaryBorderColor"
          placeholder="Search Reddit"
          size="lg"
          icon={<SearchIcon />}
          height="38px"
          backgroundColor="placeholderBgColor"
        />
      </Center>
      <Center>
        <Wrap spacing={6}>
          <WrapItem>
            <ExternalLinkIcon boxSize={6} />
          </WrapItem>
          <WrapItem>
            <UpDownIcon boxSize={6} />
          </WrapItem>
          <WrapItem>
            <CalendarIcon boxSize={6} />
          </WrapItem>
          <WrapItem>
            <ChatIcon boxSize={6} />
          </WrapItem>
          <WrapItem>
            <InfoIcon boxSize={6} />
          </WrapItem>
        </Wrap>
      </Center>
      <Center>
        <Menu>
          <MenuButton height="38px" as={Button} borderWidth={0}>
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
              {/* <Stack spacing={3}>
                <Text>Lewis Nguyen</Text>
                <Text>Developer</Text>
              </Stack> */}
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
