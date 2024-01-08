import {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {TabOverview} from '../../components/tabs/tab-overview';
import {TabReviews} from '../../components/tabs/tab-reviews';
import {TabDetails} from '../../components/tabs/tab-details';
import {TFilm} from '../../types';
import {Tab, TABS} from './constants';


type Props = {
  film: TFilm;
}

export function Tabs(props: Props) {
  const film = props.film;
  const {pathname, hash} = useLocation();
  const [currentTab, setCurrentTab] = useState(hash || Tab.overview);
  useEffect(() => {
    switch (hash) {
      case Tab.overview:
      case Tab.reviews:
      case Tab.details:
        setCurrentTab(hash);
        break;
      default:
        setCurrentTab(Tab.overview);
    }
  }, [hash]);
  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {TABS.map((tab) => {
            const className = [
              'film-nav__item',
              currentTab === tab.hash && 'film-nav__item--active'
            ].filter(Boolean).join(' ');
            return (
              <li key={tab.hash} className={className}>
                <Link to={`${pathname}${tab.hash}`} className="film-nav__link">
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {currentTab === Tab.overview && <TabOverview film={film}/>}
      {currentTab === Tab.reviews && <TabReviews/>}
      {currentTab === Tab.details && <TabDetails film={film}/>}
    </>
  );
}
