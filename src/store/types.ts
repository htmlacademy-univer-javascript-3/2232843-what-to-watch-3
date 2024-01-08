import {baseReducer} from './reducer';
import {store} from './index';


export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof baseReducer>;
