import {MouseEvent, useCallback, useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../store/hooks';
import {PlayerSelector} from '../store/player/selectors';
import {RoutePathname} from "../constants";


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
  const navigate = useNavigate();
  const videoLink = useAppSelector(PlayerSelector.videoLink);
  if (!videoLink) {
    navigate(`${RoutePathname.main}`)
  }
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
      const newProgress = (e.clientX - 25) / sliderRef.current.clientWidth;
      setProgress(newProgress * 100);
      videoRef.current.currentTime = videoRef.current.duration * newProgress;
    }
  }, []);
  useEffect(() => {
    if (progress === 100) {
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
