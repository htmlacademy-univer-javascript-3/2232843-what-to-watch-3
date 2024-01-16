export function getRunTime(minutes: number) {
  const hours = Math.floor(minutes / 60);
  if (!hours) {
    return `${minutes}m`;
  }
  return `${hours}h ${minutes % 60}m`;
}

enum FilmRatingLevel {
  BAD = 3,
  NORMAL = 5,
  GOOD = 8,
  VERY_GOOD = 10,
  AWESOME = 10,
}

export const convertFilmRatingToLevel = (rating: number): string => {
  if (rating < FilmRatingLevel.BAD) {
    return 'Bad';
  } else if (rating >= FilmRatingLevel.BAD && rating < FilmRatingLevel.NORMAL) {
    return 'Normal';
  } else if (
    rating >= FilmRatingLevel.NORMAL &&
    rating < FilmRatingLevel.GOOD
  ) {
    return 'Good';
  } else if (
    rating >= FilmRatingLevel.GOOD &&
    rating < FilmRatingLevel.VERY_GOOD
  ) {
    return 'Very good';
  } else if (rating === FilmRatingLevel.AWESOME) {
    return 'Awesome';
  } else {
    return '';
  }
};
