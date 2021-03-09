export const initialState={
    basket:[],
};

function reducer(state,action) {
    switch(action.type){
        case 'ADD_TO_BASKET':
            //LOGIC TO ADD IN BASKET
            break;
        case 'REMOVE_FROM_BASKET':
            //LOGIC TO REMOVE FROM BASKTE
            break;
        default:
            return state;
    }
}

export default reducer;