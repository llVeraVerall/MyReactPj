const updateEl = (state = {}, action: any) => {
    switch (action.type) {
    case 'UPDATE_LIST':
        return {
            ...state,
            list: action.payload
        };
    default:
        return state;
    }
};

export default updateEl;