import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../store';
import {fetchFilmComments} from '../../store/api';


export function TabReviews() {
  const options = {
  month: "long",
  day: "numeric",
  year: "numeric",
};
  const {id = ''} = useParams();
  const reviews = useAppSelector((state) => state.filmsComments);
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
        {reviews.map((review) => {
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
                    {new Date(date).toLocaleString("en-US", options)}
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
