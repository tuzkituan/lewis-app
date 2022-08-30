import { GetServerSideProps } from 'next';

const getServerSideProps: GetServerSideProps = async ({
  params = {},
  query,
}) => {
  
  return {
    props: {
      data: {
        content:'Chat room'
      },
    },
  };
};

export default getServerSideProps;