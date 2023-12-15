import {TReview} from '../../../types';


type Props = {
  reviews: TReview[]
}

export function TabReviews(props: Props) {
  const {reviews} = props;
  const options = {
  month: "long",
  day: "numeric",
  year: "numeric",
};
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => {
          const {
            text,
            author,
            date,
            raiting,
            id
          } = review;
          return (
            <div key={id} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{text}</p>
                <footer className="review__details">
                  <cite className="review__author">{author}</cite>
                  <time className="review__date">
                    {date.toLocaleString("en-US", options)}
                  </time>
                </footer>
              </blockquote>
              <div className="review__rating">{raiting}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
