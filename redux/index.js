import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/AuthReducer';
import feedReducer from './reducers/FeedReducer';
import stripsReducer from './reducers/StripsReducer';

const combinedReducers = combineReducers({
  auth: authReducer,
  feeds: feedReducer,
  strips: stripsReducer,
})

export default createStore(combinedReducers, applyMiddleware(thunk));
