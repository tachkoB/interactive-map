import { Annotation } from 'react-simple-maps';

interface City {
  name: string;
  coordinates: [number, number];
  dx: number;
  dy: number;
}

const cities: Array<City> = [
  {
    name: 'Zurich',
    coordinates: [8.5417, 47.3769],
    dx: 10,
    dy: 20,
  },
  {
    name: 'Berlin',
    coordinates: [13.405, 52.52],
    dx: 30,
    dy: -30,
  },
  {
    name: 'Frankfurt',
    coordinates: [8.6821, 50.1109],
    dx: -20,
    dy: -20,
  },
  {
    name: 'London',
    coordinates: [-0.1257, 51.5085],
    dx: -30,
    dy: 10,
  },
  {
    name: 'Manilla',
    coordinates: [120.9842, 14.5995],
    dx: -20,
    dy: 30,
  },
  {
    name: 'New York',
    coordinates: [-74.006, 40.7128],
    dx: 30,
    dy: 40,
  },
  {
    name: 'Taguig',
    coordinates: [121.0509, 14.5176],
    dx: 60,
    dy: -15,
  },
  {
    name: 'Tokyo',
    coordinates: [139.6503, 35.6762],
    dx: 60,
    dy: -40,
  },
  {
    name: 'Toronto',
    coordinates: [-79.3832, 43.6532],
    dx: -45,
    dy: -30,
  },
];

const Annotations = () => {
  return (
    <>
      {cities.map(({ name, coordinates, dx, dy }) => (
        <Annotation
          subject={coordinates}
          dx={dx}
          dy={dy}
          connectorProps={{
            stroke: 'orange',
            strokeWidth: 1,
            strokeLinecap: 'round',
          }}
        >
          <text
            x="-8"
            textAnchor="end"
            alignmentBaseline="middle"
            fill="orange"
          >
            {name}
          </text>
        </Annotation>
      ))}
    </>
  );
};

export default Annotations;
