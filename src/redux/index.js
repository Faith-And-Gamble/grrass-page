import { combineReducers } from 'redux';
import loaderReducer from './divisions/reducer';
import summaryReducer from './summary/reducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
  summary: summaryReducer,
});
export default rootReducer;
