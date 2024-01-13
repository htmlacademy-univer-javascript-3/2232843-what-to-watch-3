import {TComment, TFilm, TFilmCard, TFilmPromo} from '../../types';
import {updateFilm, updateFilmComments, updateFilmsSimilar, updatePromoFilm} from './action';
import {film} from './reducer';


describe('film reducer', () => {
  const initialState = {
    promo: null,
    film: null,
    similar: null,
    comments: null
  };

  it('handles action updatePromoFilm', () => {
    const filmPromo: TFilmPromo = {
      backgroundImage: 'https://example.com/pulp-fiction.jpg',
      genre: 'Comedy',
      id: '65436419',
      isFavorite: true,
      name: 'Pulp Fiction',
      posterImage: 'https://example.com/pulp-fiction-poster.jpg',
      released: 1994,
      videoLink: 'https://example.com/pulp-fiction-preview.mp4'
    };

    const action = updatePromoFilm(filmPromo);
    const actualState = film(initialState, action);

    expect(actualState.promo).toEqual(filmPromo);
  });

  it('handles action updateFilm action', () => {
    const filmData: TFilm = {
      backgroundColor: '#000000',
      backgroundImage: 'https://example.com/pulp-fiction.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Some Director',
      genre: 'Comedy',
      id: '65436419',
      isFavorite: true,
      name: 'Pulp Fiction',
      posterImage: 'https://example.com/pulp-fiction-poster.jpg',
      rating: 8.6,
      released: 1994,
      runTime: 186,
      scoresCount: 65829,
      starring: ['Some Actor', 'Another Actor', 'And Another One'],
      videoLink: 'https://example.com/pulp-fiction.mp4'
    };

    const action = updateFilm(filmData);
    const actualState = film(initialState, action);

    expect(actualState.film).toEqual(filmData);
  });

  it('handles action updateFilmsSimilar', () => {
    const similarFilms: TFilmCard[] = [{
      genre: 'Comedy',
      id: '65436419',
      name: 'Pulp Fiction',
      previewImage: 'https://example.com/pulp-fiction-preview.jpg',
      previewVideoLink: 'https://example.com/pulp-fiction-preview.mp4'
    }];

    const action = updateFilmsSimilar(similarFilms);
    const actualState = film(initialState, action);

    expect(actualState.similar).toEqual(similarFilms);
  });

  it('handles action updateFilmComments', () => {
    const comments: TComment[] = [{
      comment: 'Absolute must-watch',
      date: '2000-12-12',
      id: '671372',
      rating: 9,
      user: 'Some Nickname'
    }];

    const action = updateFilmComments(comments);
    const actualState = film(initialState, action);

    expect(actualState.comments).toEqual(comments);
  });
});
