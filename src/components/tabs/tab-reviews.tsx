import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {fetchFilmComments} from '../../store/film/api';
import {FilmSelector} from '../../store/film/selectors';
import {TComment} from '../../types';


export function TabReviews() {
  const {id = ''} = useParams();
  const reviews = useAppSelector(FilmSelector.comments);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFilmComments(id));
  }, [id, dispatch]);
  if (!reviews) {
    return null;
  }
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review: TComment) => {
          const {
            comment,
            user,
            date,
            rating,
            id: commentId
          } = review;
          return (
            <div key={commentId} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{user}</cite>
                  <time className="review__date">
                    {new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}
                  </time>
                </footer>
              </blockquote>
              <div className="review__rating">{rating}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
