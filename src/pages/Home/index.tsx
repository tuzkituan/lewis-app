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
      <Container borderRadius={5} minW="60vw" padding={4}>
        <Flex gap={4}>
          <Flex w="66%" gap={4} direction="column">
            <CreatePost />
            <FilterBar />
            <Posts />
          </Flex>
          <Flex w="34%" gap={4} direction="column">
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
