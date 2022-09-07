import { FC } from 'react';
import { Annotation, Geographies, Geography } from 'react-simple-maps';

// Components
import MapChart from 'components/Map';
import Annotations from 'components/Annotations';

// Constants
const WIDTH = 900;
const HEIGHT = 500;

// Topojson URL
const URL =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const geographyStyles = {
  default: { fill: '#808f85' },
  hover: { fill: '#91c499' },
  pressed: { fill: '#cfd11a' },
};

interface Props {
  handleSetCountry: (id: string) => void;
}

// Berlin, Frankfurt, Londond, Manila, New York, Taguig, Tokyo, Toronto, Zurich

/**
 * Renders an interactive map of the world
 *
 * @param handleSetCountry Handler for setting the active country when hovered
 *
 */
const WorldMap: FC<Props> = ({ handleSetCountry }) => {
  return (
    <MapChart height={HEIGHT} width={WIDTH}>
      <Geographies geography={URL}>
        {({ geographies }) =>
          geographies.map((geo) => {
            return (
              <Geography
                onMouseOver={() => handleSetCountry(geo.properties['Alpha-2'])}
                onMouseOut={() => handleSetCountry('')}
                key={geo.rsmKey}
                geography={geo}
                style={geographyStyles}
              />
            );
          })
        }
      </Geographies>
      <Annotations />
    </MapChart>
  );
};

export default WorldMap;
