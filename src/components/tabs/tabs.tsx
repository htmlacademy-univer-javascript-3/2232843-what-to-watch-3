import {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {TabOverview} from '../../components/tabs/tab-overview';
import {TabReviews} from '../../components/tabs/tab-reviews';
import {TabDetails} from '../../components/tabs/tab-details';
import {TFilmCard} from '../../types';
import {TAB, TABS} from './constants';


type Props = {
  film: TFilmCard
}

export function Tabs(props: Props) {
  const {film} = props;
  const {reviews} = film;
  const {pathname, hash} = useLocation();
  const [currentTab, setCurrentTab] = useState(hash || TAB.overview);
  useEffect(() => {
    switch (hash) {
      case TAB.overview:
      case TAB.reviews:
      case TAB.details:
        setCurrentTab(hash);
        break;
      default:
        setCurrentTab(TAB.overview);
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
      {currentTab === TAB.overview && <TabOverview film={film}/>}
      {currentTab === TAB.reviews && <TabReviews reviews={reviews}/>}
      {currentTab === TAB.details && <TabDetails film={film}/>}
    </>
  );
}
