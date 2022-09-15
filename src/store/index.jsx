import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import reducers from '../reducers/index'


const initialState ={
   breed: "Sin Datos" 
}

//const composeEnharcers=window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
  const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 //const composeEnhancers= window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose
  export const store= createStore (reducers,initialState,composeEnhancers(applyMiddleware(thunk)))
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 
    
    
//export const store= createStore (city,initialState,
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

