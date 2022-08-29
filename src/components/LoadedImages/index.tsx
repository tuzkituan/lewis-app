import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Skeleton,
  Spacer,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';
import ViewImageModal from 'components/ViewImageModal';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

interface Props {
  data: {
    photos: [];
  };
  loading: boolean;
}

const LoadedImages: FC<Props> = ({ data, loading }) => {
  const { photos = [] } = data;

  const [selectedId, setSelectedId] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const router = useRouter();

  useEffect(() => {
    const pushRouter = (renderQuery: any) => {
      return router.push({
        pathname: '/',
        query: {
          ...router.query,
          ...renderQuery,
        },
      });
    };

    const queryCnt = {
      page,
      per_page: perPage,
    };
    pushRouter(queryCnt);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, perPage]);

  useEffect(() => {
    return () => {
      setSelectedId('');
    };
  }, []);

  return (
    <Container
      backgroundColor="componentBackgroundColor"
      borderRadius={5}
      minW="65vw"
      padding={4}
    >
      <Skeleton isLoaded={!loading} fadeDuration={2}>
        <SimpleGrid columns={5} spacing={4}>
          {(photos as unknown as any[]).map((item, index) => {
            return (
              <Box key={index}>
                <Image
                  src={item.src.medium}
                  alt={item.alt}
                  width="100%"
                  height="27vh"
                  objectFit="cover"
                  onClick={() => setSelectedId(item.id)}
                  cursor="pointer"
                  backgroundColor={item.avg_color}
                />
              </Box>
            );
          })}
        </SimpleGrid>
        <Flex gap={2}>
          {page > 1 && <Button onClick={() => setPage(page - 1)}>PREV</Button>}
          <Button onClick={() => setPage(page + 1)}>NEXT</Button>
        </Flex>
      </Skeleton>
      <ViewImageModal
        item={photos.find((x: any) => x.id === selectedId)}
        onClose={() => setSelectedId('')}
      />
    </Container>
  );
};

export default LoadedImages;
