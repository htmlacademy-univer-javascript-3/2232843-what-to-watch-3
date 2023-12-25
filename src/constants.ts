export const enum RoutePathname {
  MAIN = '/',
  LOGIN = 'login',
  MY_LIST = 'mylist',
  FILMS = 'films',
  REVIEW = 'review',
  PLAYER = 'player',
  NOT_FOUND='404'
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