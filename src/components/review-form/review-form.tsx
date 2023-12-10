import {ChangeEvent, Fragment, useCallback, useState} from 'react';


export function ReviewForm() {
  const [formData, setFormData] = useState({
    rating: '',
    'review-text': ''
  });
  const handleChange = useCallback((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  }, [formData]);
  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {Array.from({length: 10}).map((_, index) => {
            const value = 10 - index;
            return (
              <Fragment key={index}>
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
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={handleChange}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}
