import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

// Components
import WorldMap from 'components/WorldMap';
import MapTooltip from '@/components/MapTooltip';

// Graphql
import client from 'graphql/client';
import { GET_COUNTRIES } from 'graphql/queries';

// Types
import { MappedCountries, Countries } from 'types';

// Styles
import { Container } from './styled';

interface Props {
  countries: MappedCountries;
}

/**
 * Renders the home page with the map
 *
 * @param countries List of all countries
 *
 */
const Home: NextPage<Props> = ({ countries }) => {
  const [country, setCountry] = useState('');

  const handleSetCountry = (id: string) => {
    setCountry(id);
  };

  return (
    <>
      <Head>
        <title>Countries</title>
      </Head>
      <Container>
        <h1>RepMap</h1>
        <MapTooltip country={countries[country]} />
        <WorldMap handleSetCountry={handleSetCountry} />
      </Container>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const { data } = await client.query<Countries>({
    query: GET_COUNTRIES,
  });

  const countries = data.countries.reduce((a, country) => {
    a[country.code] = {
      ...country,
      languages: country.languages.map((language) => language.name),
    };
    return a;
  }, {} as MappedCountries);

  return {
    props: {
      countries,
    },
  };
}
