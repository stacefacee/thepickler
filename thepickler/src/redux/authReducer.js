const initialState = {
  user: null
}

const SAVE_USER = "SAVE_USER";


export function saveUser(user){
  return {
    type: SAVE_USER,
    payload: user
  }
};

export default function(state = initialState, action){
  switch(action.type){
    case SAVE_USER:
      return{...state, user: action.payload}
    default: return {...state}
  }
};

