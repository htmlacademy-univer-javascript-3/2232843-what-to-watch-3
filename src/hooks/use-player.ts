import {MouseEvent, useCallback, useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {ReduxStateStatus, RoutePathname} from '../constants';
import {FilmSelector} from '../store/film/selectors';
import {fetchFilm} from '../store/film/api';


const MAX_PROGRESS = 100;

function getLeftTime(duration: number, currentTime: number) {
  const hours = Math.floor(duration / (60 * 60));
  let leftSeconds = duration - currentTime;
  const leftHours = Math.floor(leftSeconds / (60 * 60));
  leftSeconds -= leftHours * (60 * 60);
  const leftMinutes = Math.floor(leftSeconds / 60);
  leftSeconds = Math.floor(leftSeconds - leftMinutes * 60);
  const displayedHours = hours.toString().padStart(2, '0');
  const displayedMinutes = leftMinutes.toString().padStart(2, '0');
  const displayedSeconds = leftSeconds.toString().padStart(2, '0');
  if (hours > 0) {
    return `-${displayedHours}:${displayedMinutes}:${displayedSeconds}`;
  }
  return `-${displayedMinutes}:${displayedSeconds}`;
}

export function usePlayer() {
  const {id = ''} = useParams();
  const film = useAppSelector(FilmSelector.film);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchFilm(id))
      .then((res) => {
        if (res.meta.requestStatus === ReduxStateStatus.rejected) {
          navigate(`/${RoutePathname.notFound}`);
        }
      });
  }, [id, navigate, dispatch]);
  const videoLink = film?.videoLink;
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState<null | string>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleExitClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  const handleTogglePlayClick = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);
  const handleToggleFullScreenClick = useCallback(() => {
    videoRef.current?.requestFullscreen();
  }, []);
  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      const {duration, currentTime} = videoRef.current;
      const newProgress = (currentTime / duration) * 100;
      setProgress(newProgress);
      setTimeLeft(getLeftTime(duration, currentTime));
    }
  }, []);
  const handleProgressClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const newProgress = (e.clientX - rect.left) / sliderRef.current.clientWidth;
      setProgress(newProgress * MAX_PROGRESS);
      videoRef.current.currentTime = videoRef.current.duration * newProgress;
    }
  }, []);
  useEffect(() => {
    if (progress === MAX_PROGRESS) {
      setIsPlaying(false);
    }
  }, [progress]);
  return {
    videoRef,
    videoLink,
    handleTimeUpdate,
    handleExit: handleExitClick,
    sliderRef,
    handleProgressClick,
    progress,
    handleTogglePlay: handleTogglePlayClick,
    isPlaying,
    handleToggleFullScreen: handleToggleFullScreenClick,
    timeLeft
  };
}
