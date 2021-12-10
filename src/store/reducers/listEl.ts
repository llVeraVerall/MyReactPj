import {AllActions} from '../actions/types';

export interface IItem {
    name: string;
    id: number;
}

export interface IStateList {
    list?: IItem[];
}

const listEl = (state: IStateList = {}, action:AllActions) => {
    switch (action.type) {
    case 'ADD_LIST':
        return {
            ...state,
            list: action.payload
        };
    case 'GET_LIST':
        return {
            ...state,
            list: action.payload
        };
    case 'DELETE_EL':
        return {
            ...state,
            list: (state.list ?? [])
            //проходимся по массиву и говорим оставить все элементы, у которых индекс не равен action.payload
                .filter((item, index) => index !== action.payload)
        };
    case 'ADD_ID':
        return {
            ...state,
            list: [...state.list ?? [],
                action.payload]
        };
    case 'ADD_TOKEN':
        return {
            ...state,
            token: action.payload
        };
    case 'UPDATE_LIST':
        return {
            ...state,
            list: action.payload
        };
    default:
        return state;
    }
};

export default listEl;
