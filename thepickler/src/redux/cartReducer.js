const initialState = {
  cart: []
}

const SAVE_CART = "SAVE_CART";
const DELETE_ITEM = 'DELETE_ITEM'


export function setCartItems(cart){
  return {
    type: SAVE_CART,
    payload: cart
  }
};

// export function deleteItem(item){
//   return {
//     type: DELETE_ITEM,
//     payload: null
//   }
// };

export default function(state = initialState, action){
  switch(action.type){
    case SAVE_CART:
      return{...state, cart: action.payload}
    default: return {...state}
  

    // case DELETE_ITEM:
    //   return {...state, cart: [] }
  }
};