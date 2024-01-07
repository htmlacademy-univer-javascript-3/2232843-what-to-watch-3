export const enum RoutePathname {
  main = '/',
  login = 'login',
  myList = 'mylist',
  films = 'films',
  review = 'review',
  player = 'player',
  notFound='404'
}

export const ALL_GENRES = 'All genres';

export enum ReduxStateStatus {
  pending = 'pending',
  fulfilled = 'fulfilled',
  rejected = 'rejected',
  idle = 'idle'
}

export enum AuthorizationStatus {
  notAuthorized = 'notAuthorized',
  authorized = 'authorized'
}