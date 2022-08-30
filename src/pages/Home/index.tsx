import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react';
import MainLayout from 'layouts/MainLayout';
import type { NextPage } from 'next';
import Head from 'next/head';
import CreateFrontPage from './components/CreateFrontPage';
import CreatePost from './components/CreatePost';
import FilterBar from './components/FilterBar';
import Posts from './components/Posts';
import Premium from './components/Premium';
import TopCommunities from './components/TopCommunities';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Reddit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container
        borderRadius={5}
        minW={{
          sm: '80vw',
          md: '80vw',
          lg: '70vw',
          xl: '55vw',
        }}
        padding={4}
      >
        <Flex
          gap={4}
          direction={{
            sm: 'column',
            xl: 'row',
          }}
        >
          <Flex
            gap={4}
            direction="column"
            w={{
              sm: '100%',
              xl: '66%',
            }}
          >
            <CreatePost />
            <FilterBar />
            <Posts />
          </Flex>
          <Flex gap={4} direction="column" flex={1}>
            <TopCommunities />
            <Premium />
            <CreateFrontPage />
          </Flex>
        </Flex>
      </Container>
    </MainLayout>
  );
};

export default Home;
