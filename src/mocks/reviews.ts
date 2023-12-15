import {TReview} from 'src/types';


export const reviews: TReview[] = [
  {
    id: 1,
    author: 'Kate Muir',
    date: new Date(2023, 12, 15),
    raiting: 8.9,
    text: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.'
  },
  {
    id: 2,
    author: 'Matthew Lickona',
    date: new Date(2022, 2, 22),
    raiting: 7.3,
    text: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.'
  },
  {
	id: 3,
    author: 'Paula Fleri-Soler',
    date: new Date(2016, 11, 20),
    raiting: 7.6,
    text: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.'
  }
];
