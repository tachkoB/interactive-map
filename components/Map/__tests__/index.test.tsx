import Map from '../index';

import { render } from '@testing-library/react';

describe('Map component', () => {
  it('should render the component', () => {
    const { container } = render(<Map height={200} width={200} />);

    expect(container).toMatchSnapshot();
  });

  it('should render the children', () => {
    const { getByText } = render(
      <Map height={200} width={200}>
        hello
      </Map>
    );

    expect(getByText('hello')).toBeInTheDocument();
  });
});
