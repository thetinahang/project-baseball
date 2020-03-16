import { combineReducers } from 'redux';
import productsReducer from './products_reducer';
import keyTermsReducer from './keyterms_reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  keyterms: keyTermsReducer
}); 

export default rootReducer; 