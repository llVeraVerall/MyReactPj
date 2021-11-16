const token = (state = {}, action: any) => {
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

export default token;