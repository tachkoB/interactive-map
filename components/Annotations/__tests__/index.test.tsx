import Annotations from '../index';
import { render } from '@testing-library/react';
import { ComposableMap, ZoomableGroup } from 'react-simple-maps';

const Component = (
  <ComposableMap>
    <ZoomableGroup width={200} height={200}>
      <Annotations />
    </ZoomableGroup>
  </ComposableMap>
);

describe('Annotations component', () => {
  it('should render the component', () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it('should render the names of all cities', () => {
    const { container, getByText } = render(Component);

    expect(container).toMatchSnapshot();

    const cities = [
      'Zurich',
      'Manilla',
      'New York',
      'London',
      'Toronto',
      'Berlin',
      'Frankfurt',
      'Taguig',
      'Tokyo',
    ];

    cities.forEach((city) => {
      expect(getByText(city)).toBeInTheDocument();
    });
  });
});
