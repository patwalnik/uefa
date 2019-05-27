import {
    combineReducers
} from 'redux';
import { homepageReducer } from './reducers.userData';

export const allReducer = combineReducers({
     homepageReducer
})

