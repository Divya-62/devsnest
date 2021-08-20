

const todoReducer =(state =['item1', 'item2', 'item3'],action) => {
    if(action.type === "ADD_ITEM"){
        return [...state,action.payload];

    }
    else if(action.type ==="REMOVE_ITEM"){
        return state.filter((item,index) => index !== action.payload);
    }
    return state;
};
export default todoReducer;