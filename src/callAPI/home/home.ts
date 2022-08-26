import { GetServerSideProps } from 'next';

const getServerSideProps: GetServerSideProps = async ({
  params = {},
  query,
}) => {
  console.log(query);
  return { props: { prop1: params.home } };
};

export default getServerSideProps;
