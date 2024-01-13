import {ChangeEvent, Fragment, useCallback, useState, FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {postComments} from '../../store/film/api';
import {ReduxStateStatus, RoutePathname} from '../../constants';
import {useAppDispatch} from '../../store/hooks';


const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 400;
const RATING_SYSTEM = 10;

type Props = {
  filmId: string;
}

export function ReviewForm(props: Props) {
  const {filmId} = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rating: '',
    comment: ''
  });
  const isButtonDisabled = formData.rating === ''
    || formData.comment.length > MAX_COMMENT_LENGTH
    || formData.comment.length < MIN_COMMENT_LENGTH;
  const handleChange = useCallback((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  }, [formData]);
  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    const {rating, comment} = formData;
    dispatch(postComments({comment, rating: Number(rating), filmId}))
      .then((res) => {
        if (res.meta.requestStatus !== ReduxStateStatus.rejected) {
          navigate(`/${RoutePathname.films}/${filmId}#reviews`);
        }
        return null;
      });
  }, [dispatch, navigate, filmId, formData]);
  return (
    <form className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {Array.from({length: RATING_SYSTEM}).map((_, index) => {
            const value = RATING_SYSTEM - index;
            return (
              <Fragment key={value}>
                <input
                  className="rating__input"
                  id={`start-${value}`}
                  type="radio"
                  name="rating"
                  value={value}
                  onChange={handleChange}
                />
                <label
                  className="rating__label"
                  htmlFor={`start-${value}`}
                >
                  Rating {value}
                </label>
              </Fragment>
            );
          })}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="comment"
          id="comment"
          placeholder="Review text"
          onChange={handleChange}
          minLength={MIN_COMMENT_LENGTH}
          maxLength={MAX_COMMENT_LENGTH}
        />
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={isButtonDisabled}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}
