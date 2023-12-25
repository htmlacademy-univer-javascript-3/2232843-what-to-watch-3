import {Link, useNavigate} from 'react-router-dom';
import {Footer} from '../../components/footer';
import {RoutePathname, ReduxStateStatus} from '../../constants';
import {FormEvent, useCallback} from 'react';
import {useSnackbar} from 'notistack';
import {useAppDispatch} from '../../store';
import {postLogin} from '../../store/api';


interface CustomElements extends HTMLFormControlsCollection {
  'user-email': HTMLInputElement,
  'user-password': HTMLInputElement
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements
}

export function SignIn() {
  const dispatch = useAppDispatch();
  const {enqueueSnackbar} = useSnackbar();
  const navigate = useNavigate();
  const handleSubmit = useCallback((event: FormEvent<CustomForm>) => {
    event.preventDefault();
    const target = event.currentTarget.elements;
    const email = target['user-email'].value;
    const password = target['user-password'].value;
    dispatch(postLogin({email, password})).then((res) => {
      if (res.meta.requestStatus === ReduxStateStatus.rejected) {
        enqueueSnackbar(
          'Unable to sign in. Check entered email and password',
          {variant: 'error'}
        );
      } else {
        navigate(RoutePathname.MAIN);
      }
      return null;
    });
  }, [dispatch, navigate, enqueueSnackbar]);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={RoutePathname.MAIN} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}
