import React, { FC } from 'react';
import dynamic from 'next/dynamic';

// Components
const ReactTooltip = dynamic(() => import('react-tooltip'), { ssr: false });

// Types
import { TooltipState } from 'types';

interface Props {
  country: TooltipState;
}

/**
 * Renders a tooltip with the information about the country
 *
 * @param country    Country data to represent
 * @returns
 */
const MapTooltip: FC<Props> = ({ country }) => {
  const { name, capital, languages } = country;

  if (!name) {
    return null;
  }

  return (
    <ReactTooltip>
      <p>Country: {name}</p>
      <p>Capital: {capital}</p>
      <p>Languages: {languages.join(', ')}</p>
    </ReactTooltip>
  );
};

export default MapTooltip;
