import {usePlayer} from '../../hooks';



export function Player() {
  const {
    videoRef,
    videoLink,
    handleTimeUpdate,
    handleExit,
    sliderRef,
    handleProgressClick,
    progress,
    handleTogglePlay,
    isPlaying,
    handleToggleFullScreen,
    timeLeft
  } = usePlayer();
  return (
    <div className="player">
      <video
        ref={videoRef}
        src={videoLink}
        className="player__video"
        poster="img/player-poster.jpg"
        onTimeUpdate={handleTimeUpdate}
      />
      <button
        type="button"
        className="player__exit"
        onClick={handleExit}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
		  <div
            className="player__time"
            ref={sliderRef}
            onClick={handleProgressClick}
          >
            <progress
              className="player__progress"
              value={progress}
              max={100}
            />
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeLeft}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handleTogglePlay}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? '#pause' : '#play-s'}></use>
            </svg>
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={handleToggleFullScreen}>
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
