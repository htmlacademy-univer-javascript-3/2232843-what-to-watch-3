import {render} from '@testing-library/react';
import {Loader} from './loader';


describe('Loader', () => {
  it('renders a loader component', () => {
    const {getByTestId} = render(<Loader/>);
    const actualLoader = getByTestId('loader');
    expect(actualLoader).toBeInTheDocument();
  });
});
