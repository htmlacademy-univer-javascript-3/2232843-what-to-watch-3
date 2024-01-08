import {JSX, useEffect} from 'react';
import {useLocation} from 'react-router-dom';


type Props = {
  children: JSX.Element
}
export function ScrollToTop(props: Props) {
  const {children} = props;
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return children;
}
