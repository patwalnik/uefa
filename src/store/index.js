import { allReducer} from '../reducer/index';
import { applyMiddleware, createStore, compose } from 'redux';
import { middleware } from '../middleware/index';
// import thunkMiddleware from 'redux-thunk';
// import promise from 'redux-promise-middleware';

const composeEnhancer =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;


const store = createStore(
    allReducer,
    composeEnhancer(applyMiddleware(...middleware)),
    
    
   
)
console.log( 'store state',store.getState())
export default store;