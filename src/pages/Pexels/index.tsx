import MainLayout from 'layouts/MainLayout';
import type { NextPage } from 'next';
import Head from 'next/head';
import LoadedImages from './components/LoadedImages';

interface Props {
  data: {
    photos: [];
  };
}
const Pexels: NextPage<Props> = ({ data }) => {
  return (
    <MainLayout>
      <Head>
        <title>Pexels</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LoadedImages data={data} />
    </MainLayout>
  );
};

export default Pexels;
