import { combineReducers } from "redux";
import pageReducer from './reducers/PageReducer';

export const rootReducer = combineReducers({
    page: pageReducer,
});
