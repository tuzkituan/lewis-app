import {
  AtSignIcon,
  CalendarIcon,
  HamburgerIcon,
  StarIcon,
  UpDownIcon,
} from '@chakra-ui/icons';
import {
  Button,
  Center,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import { FC } from 'react';

const FilterBar: FC = () => {
  const { colorMode } = useColorMode();

  const tabs = [
    {
      name: 'Best',
      icon: <UpDownIcon />,
    },
    {
      name: 'Hot',
      icon: <StarIcon />,
    },
    {
      name: 'New',
      icon: <AtSignIcon />,
    },
    {
      name: 'Top',
      icon: <CalendarIcon />,
    },
  ];
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
      {tabs.map((x) => {
        return (
          <Center key={x.name}>
            <Button aria-label={x.name} leftIcon={x.icon}>
              {x.name}
            </Button>
          </Center>
        );
      })}
      <Spacer />

      <Center>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem minH="48px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://placekitten.com/100/100"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <span>Fluffybuns the Destroyer</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </Center>
    </Flex>
  );
};

export default FilterBar;
