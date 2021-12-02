const deleteEl = (state = {}, action: any) => {
    switch (action.type) {
    case 'DELETE_LIST':
        return {
            ...state,
            list: action.payload
        };
    default:
        return state;
    }
};

export default deleteEl;