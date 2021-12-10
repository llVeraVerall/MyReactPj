import {AllActions} from '../actions/types';

export interface IStateToken{
    token?: string
}

const tokenR = (state: IStateToken = {}, action:AllActions) => {
    switch (action.type) {
    case 'ADD_TOKEN':
        return {
            ...state,
            token: action.payload
        };
            
    default:
        return state;
    }
};

export default tokenR;
