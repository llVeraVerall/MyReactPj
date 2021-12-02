const addId1 = (state = {}, action: any) => {
    switch (action.type) {
    case 'ADD_ID1':
        return {
            ...state,
            list: action.payload
        };
    default:
        return state;
    }
};

export default addId1;