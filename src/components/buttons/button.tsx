import {ReactNode} from 'react';


type Props = {
  children: ReactNode;
  className: string;
  onClick: () => void;
};

export function Button(props: Props) {
  const {children, className, onClick} = props;
  return (
    <button
      className={['btn film-card__button', className].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
