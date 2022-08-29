import { Spinner } from '@chakra-ui/react';
import LoadedImages from 'components/LoadedImages';
import MainLayout from 'layouts/MainLayout';
import type { NextPage } from 'next';
import { usePageLoading } from 'utils/loading';

interface HomeProps {
  data: {
    photos: [];
  };
}
const Home: NextPage<HomeProps> = ({ data }) => {
  const { isPageLoading } = usePageLoading();
  return (
    <MainLayout>
      <LoadedImages data={data} loading={isPageLoading} />
    </MainLayout>
  );
};

export default Home;
