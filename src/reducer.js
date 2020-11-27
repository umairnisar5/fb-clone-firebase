export const initialState = {
    user: null,
};

export const actionTtypes = {
    SET_USER: "SET_USER",
};
const reducer = (state, action) => {
    switch (action.type) {
        case actionTtypes.SET_USER:
            return {
                ...state, 
                user: action.user,
            };
            default:
                return state;
    }
};

export default reducer