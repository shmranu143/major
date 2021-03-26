export const initialState={
    basket:[],
    user:null,
};

const reducer=(state,action)=> {
    // console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //LOGIC TO ADD IN BASKET
            return {
                ...state,
                basket:[...state.basket,action.item]
            };
            break;
        case 'REMOVE_FROM_BASKET':
            //LOGIC TO REMOVE FROM BASKTE
            return {state};
            break;
        default:
            return state;
    }
}

export default reducer;