const getId = (state = {}, action: any) => {
    switch (action.type) {
    case 'GET_LIST':
        return {
            ...state,
            list: action.payload
        };
    default:
        return state;
    }
};

export default getId;