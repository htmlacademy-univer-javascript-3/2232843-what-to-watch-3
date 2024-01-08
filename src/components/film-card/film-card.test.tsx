import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {FilmCard} from './film-card';


describe('FilmCard', () => {
  const filmData = {
    genre: 'Comedy',
    id: '65436419',
    name: 'Pulp Fiction',
    previewImage: '/public/img/pulp-fiction.jpg',
    previewVideoLink: '/public/vid/pulp-fiction.mp4',
  };

  it('renders a film card using id, name, genre, preview image path and preview video path', () => {
    const {getByText, getByAltText} = render(
      <BrowserRouter>
        <FilmCard {...filmData} isActive={false}/>
      </BrowserRouter>
    );

    const actualName = getByText(filmData.name);
    expect(actualName).toBeInTheDocument();

    const actualPreviewImg = getByAltText(filmData.name);
    expect(actualPreviewImg.getAttribute('src')).toBe(filmData.previewImage);
  });
});
