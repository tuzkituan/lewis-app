import { API_KEY, BASE_URL_API } from '../../constants';
import { GetServerSideProps } from 'next';

const getServerSideProps: GetServerSideProps = async ({
  params = {},
  query,
}) => {
  const { page = 1, per_page = 12, search = '' } = query;

  let data = {};
  let queryString = BASE_URL_API + search;
  if (per_page) queryString = queryString + `&per_page=${per_page}`;
  if (page) queryString = queryString + `&page=${page}`;

  try {
    const res = await fetch(queryString, {
      method: 'GET',
      headers: new Headers({
        Authorization: API_KEY,
      }),
    });
    const jsonData = (await res.json()) as any;
    data = jsonData;
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      data,
    },
  };
};

export default getServerSideProps;
