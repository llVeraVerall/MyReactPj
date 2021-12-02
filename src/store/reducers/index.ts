import token from './token';
import {combineReducers} from 'redux';
import listEl from './listEl';
import getId from './getId';
import addId1 from '../actions/addId1';
import updateEl from './updateEl';
import deleteEl from './deleteEl';

const rootReducer = combineReducers({
    token, listEl, getId, addId1, updateEl, deleteEl
});
export default rootReducer;