import {combineReducers} from 'redux';
import listEl, {IStateList} from './listEl';
import tokenR, {IStateToken} from './token';

export interface IState {
    tokenR: IStateToken;
    listEl: IStateList;
}

const rootReducer = combineReducers({
    listEl, tokenR
});
export default rootReducer;