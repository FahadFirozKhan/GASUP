import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/AuthReducer';
import feedReducer from './reducers/FeedReducer';

const combinedReducers = combineReducers({
  auth: authReducer,
  feeds: feedReducer,
})

export default createStore(combinedReducers);
