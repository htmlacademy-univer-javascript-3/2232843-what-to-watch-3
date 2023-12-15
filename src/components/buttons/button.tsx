import {JSX} from 'react';
import {Link} from 'react-router-dom';


type Props = {
  children: JSX.Element | JSX.Element[],
  to: string,
  className: string
};

export function Button(props: Props) {
  const {children, to, className} = props;
  return (
    <Link
      className={['btn film-card__button', className].join(' ')}
      to={to}
    >
      {children}
    </Link>
  );
}
