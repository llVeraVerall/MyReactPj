const listEl = (state = {}, action: any) => {
    switch (action.type) {
    case 'ADD_LIST':
        return {
            ...state,
            list: action.payload
        };
    default:
        return state;
    }
};

export default listEl;