import { FC, PropsWithChildren } from 'react';
import { ZoomableGroup } from 'react-simple-maps';

// Styles
import { ComposableMap } from './styled';

interface Props extends PropsWithChildren {
  height: number;
  width: number;
}

/**
 * Renders a a zoomable, interactive map
 */
const MapChart: FC<Props> = ({ height, width, children }) => {
  return (
    <ComposableMap data-tip width={width} height={height}>
      <ZoomableGroup
        translateExtent={[
          [0, 0],
          [width, height],
        ]}
      >
        {children}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
