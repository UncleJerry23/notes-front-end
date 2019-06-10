import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import { promiseMiddleware } from 'promise-middleware-redux';
import reducer from './reducer';

export default createStore(
  reducer,
  compose(
    applyMiddleware(promiseMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
