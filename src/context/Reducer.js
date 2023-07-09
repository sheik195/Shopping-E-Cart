export const cartReducer=(state,action)=>{
    switch (action.type) {
        case "change":
            return{products:[action.data],
                cart:[]
            }
        case "Add to cart":
            return{...state, cart:[...state.cart,{...action.payload, qty:1}]}
            case "Remove from cart":
                return{...state, cart:state.cart.filter(c=>c._id!==action.payload._id)}
        case 'Change cart qty':
            return{...state,cart:state.cart.filter(c=>c._id===action.payload._id ? c.qty=action.payload.qty : c.qty)}
        case "op":
            return{...state,products:[action.payload]}
        default:
            return state;
    }
}

export const productRducer=(state,action)=>{
    switch (action.type) {
        case 'Sort by price':
            return {...state,sort:action.payload}
        case 'Filter by stock':
            return {...state,quantity:!state.quantity};
        case 'Filter by rating':
            return {...state,rating:action.payload};
        case 'Filter by search':
            return {...state,searchQuery:action.payload};
        case 'Clear Filter':
            return{
                quantity:false,
                rating:0,
                searchQuery:"",
            }
        case 'Type cart':
            return{...state,type:action.payload}
    
        default:
            return state;
    }

}