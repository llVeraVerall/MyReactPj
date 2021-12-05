export interface IItem {
    name: string;
    id: number;
}

interface IState {
    list?: IItem[];
}

const listEl = (state :IState = {}, action: any,) => {
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
            list: state.list
                .filter((item, index) => index !== action.payload)
        };
    case 'ADD_ID1':
        return {
            ...state,
            list: action.payload
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