import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import reduxthunk from 'redux-thunk';
import searchReducer from './reducer/searchReducer';
import searchReducer2 from './reducer/searchReducer2';

const rootReducer = combineReducers({
  getWeather: searchReducer,
  getWeather2: searchReducer2,
});

export const store = createStore(rootReducer, applyMiddleware(reduxthunk));
