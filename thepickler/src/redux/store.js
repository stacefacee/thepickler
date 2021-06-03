import authReducer from './authReducer';
import {createStore, combineReducers} from 'redux';
import cartReducer from './cartReducer';

const allReducers = combineReducers({
  authReducer,
  cartReducer

});

export default createStore(allReducers);