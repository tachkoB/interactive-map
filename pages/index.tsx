import type { NextPage } from 'next';
import Head from 'next/head';

// Components
import MapChart from '../components/Map';

// Styles
import { Container } from './styled';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Countries</title>
      </Head>
      <MapChart />
    </>
  );
};

export default Home;
