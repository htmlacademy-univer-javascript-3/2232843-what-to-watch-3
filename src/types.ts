export type TReview = {
  author: string,
  date: Date,
  id: number,
  raiting: number,
  text: string
}

export type TFilmCard = {
  description: string,
  director: string,
  genre: string,
  id: string,
  minutes: number,
  numberOfRatings: number,
  poster: string,
  preview: string,
  raiting: number,
  reviews: TReview[],
  starring: string[],
  title: string,
  videoSrc: string,
  year: number
}

export type TPlayer = {
  src: string
}
