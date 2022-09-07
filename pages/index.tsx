import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Components
import WorldMap from 'components/WorldMap';
import MapTooltip from '@/components/MapTooltip';

// Graphql
import client from 'graphql/client';
import { GET_COUNTRIES } from 'graphql/queries';

// Types
import { MappedCountry, Countries, TooltipState } from 'types';

// Styles
import { Container } from './styled';

interface Props {
  countries: MappedCountry;
}

/**
 * Picks and returns keys from the active country for the tooltip text
 *
 * @param id          Id of the country
 * @param countries   List of all countries
 * @returns           Object with keys for the tooltip
 */
const getActiveCountry = (id: string, countries: MappedCountry) => {
  if (!countries[id]) {
    return initialState;
  }
  const { name, capital, languages } = countries[id];

  return {
    name,
    capital,
    languages: languages.map(({ name }) => name),
  };
};

const initialState: TooltipState = {
  name: '',
  capital: '',
  languages: [],
};

const Home: NextPage<Props> = ({ countries }) => {
  const [country, setCountry] = useState('');

  const handleSetCountry = (id: string) => {
    setCountry(id);
  };

  const [tooltip, setTooltip] = useState<TooltipState>(initialState);

  useEffect(() => {
    if (!country) {
      setTooltip(initialState);
      return;
    }

    setTooltip(getActiveCountry(country, countries));
  }, [country]);

  console.log(tooltip, 'tooltip');

  return (
    <>
      <Head>
        <title>Countries</title>
      </Head>
      <Container>
        <h1>RepMap</h1>
        <MapTooltip country={tooltip} />
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

  const countries = data.countries.reduce((a, b) => {
    a[b.code] = b;
    return a;
  }, {} as MappedCountry);

  return {
    props: {
      countries,
    },
  };
}
