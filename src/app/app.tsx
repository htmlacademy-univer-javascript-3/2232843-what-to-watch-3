import {Main, Props as MainProps} from '../pages/main/main.tsx';


type Props = MainProps;

export function App(props: Props) {
  const {filmTitle, filmGenre, filmPromoDate} = props;
  return (
    <Main
      filmTitle={filmTitle}
      filmGenre={filmGenre}
      filmPromoDate={filmPromoDate}
    />
  );
}
