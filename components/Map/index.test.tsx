import MapChart from './index';

import { render } from '@testing-library/react';

describe('MapChart component', () => {
  it('should render the component', () => {
    const { container } = render(<MapChart />);

    expect(container).toMatchSnapshot();
  });
});
