import styled from 'styled-components';
import { ComposableMap as Map, Geography as Geo } from 'react-simple-maps';

export const ComposableMap = styled(Map)`
  border: 2px solid black;
  width: 60%;
  height: 60%;
`;

export const Geography = styled(Geo)`
  default: {
    fill: #06f;
  }
  hover: {
    fill: #04d;
  }
  pressed: {
    fill: #02a;
  }
`;
