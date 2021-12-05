import token from './token';
import {combineReducers} from 'redux';
import listEl from './listEl';
import getId from './getId';
import addIdEl from './addId1';
import updateEl from './updateEl';
import deleteEl from './deleteEl';

const rootReducer = combineReducers({
    token, listEl, getId, addIdEl, updateEl, deleteEl
});
export default rootReducer;