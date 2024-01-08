import {render} from '@testing-library/react';
import {Button} from './button';


describe('Button component', () => {
  it('renders a button given children and name', () => {
    const children = 'Press here';
    const name = 'some-button';
    const handleClick = () => {
      Promise.resolve();
    };

    const {getByText} = render(
      <Button className={name} onClick={handleClick}>
        {children}
      </Button>
    );

    const actualButton = getByText(children);
    expect(actualButton).toBeInTheDocument();
    expect(actualButton).toHaveClass('btn');
    expect(actualButton).toHaveClass('film-card__button');
    expect(actualButton).toHaveClass(name);
  });
});
