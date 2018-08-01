/**
 * Created by Jaguar on 18/7/13.
 */

import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from './reducer';
import thunk from 'redux-thunk'; // action支持后端异步

const middleware = [thunk];

export const store = createStore(rootReducer, compose(
  applyMiddleware(...middleware)
));
