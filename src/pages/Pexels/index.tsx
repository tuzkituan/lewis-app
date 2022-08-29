import LoadedImages from 'components/LoadedImages';
import MainLayout from 'layouts/MainLayout';
import type { NextPage } from 'next';
import Head from 'next/head';
import { usePageLoading } from 'utils/loading';

interface Props {
  data: {
    photos: [];
  };
}
const Pexels: NextPage<Props> = ({ data }) => {
  const { isPageLoading } = usePageLoading();
  return (
    <MainLayout>
      <Head>
        <title>Pexels</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LoadedImages data={data} loading={isPageLoading} />
    </MainLayout>
  );
};

export default Pexels;
