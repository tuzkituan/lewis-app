import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  SimpleGrid,
} from '@chakra-ui/react';
import ViewImageModal from 'components/ViewImageModal';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';

interface Props {
  data: {
    photos: [];
  };
}

const LoadedImages: FC<Props> = ({ data }) => {
  const { photos = [] } = data;

  const [selectedId, setSelectedId] = useState('');
  const [page, setPage] = useState(1);
  const router = useRouter();
  const didMount = useRef(true);

  const viewingPhoto = photos.find((x: any) => x.id === selectedId) || {};

  useEffect(() => {
    const pushRouter = (renderQuery: any) => {
      return router.push({
        pathname: '/pexels',
        query: {
          ...router.query,
          ...renderQuery,
        },
      });
    };

    const queryCnt = {
      page,
    };

    if (!didMount.current) {
      pushRouter(queryCnt);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    didMount.current = false;
    return () => {
      setSelectedId('');
    };
  }, []);

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
    <Container
      // backgroundColor="componentBackgroundColor"
      borderRadius={5}
      minW="70vw"
      padding={2}
    >
      <Box marginBottom={4} w="300px" justifyContent="end">
        <InputGroup variant="filled">
          <Input placeholder="Search Wallpapers..." onKeyDown={onSearch} />
        </InputGroup>
      </Box>
      <SimpleGrid columns={5} spacing={2}>
        {(photos as unknown as any[]).map((item, index) => {
          return (
            <Box key={index}>
              <Image
                src={item.src.large}
                alt={item.alt}
                width="100%"
                height="27vh"
                objectFit="cover"
                onClick={() => setSelectedId(item.id)}
                cursor="pointer"
                backgroundColor={item.avg_color}
                borderRadius={2}
              />
            </Box>
          );
        })}
      </SimpleGrid>

      <Flex gap={2} paddingTop={3} justifyContent="right">
        {page > 1 && <Button onClick={() => setPage(page - 1)}>PREV</Button>}
        <Button
          onClick={() => setPage(page + 1)}
          bg="primaryColor"
          color="white"
          _hover={{
            bg: 'primaryColor',
          }}
        >
          NEXT
        </Button>
      </Flex>
      <ViewImageModal item={viewingPhoto} onClose={() => setSelectedId('')} />
    </Container>
  );
};

export default LoadedImages;
