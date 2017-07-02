import {combineReducers} from 'redux';
import {keyword_r,tweets_r,status_r} from './twitterReducers';

const rootReducer=combineReducers(
  {
    tweets_r,
    keyword_r,
    status_r
    }
);

export default rootReducer;