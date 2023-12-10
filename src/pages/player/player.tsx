import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {TPlayer} from '../../types';


type Props = TPlayer;

export function Player(props: Props) {
  const {src} = props;
  const navigate = useNavigate();
  const handleExit = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return (
    <div className="player">
      <video src={src} className="player__video" poster="img/player-poster.jpg"></video>

      <button
        type="button"
        className="player__exit"
        onClick={handleExit}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:45:21</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
