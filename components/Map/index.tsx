import { Geographies, ZoomableGroup } from 'react-simple-maps';

// Styles
import { ComposableMap, Geography } from './styled';

// Topojson URL
const URL =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const geographyStyles = {
  default: { fill: '#06F' },
  hover: { fill: '#04D' },
  pressed: { fill: '#02A' },
};

const WIDTH = 900;
const HEIGHT = 500;

/**
 * Renders a a zoomable map of the world
 */
export default function MapChart() {
  return (
    <ComposableMap width={WIDTH} height={HEIGHT}>
      <ZoomableGroup
        translateExtent={[
          [0, 0],
          [WIDTH, HEIGHT],
        ]}
      >
        <Geographies geography={URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={geographyStyles}
              />
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
}
