import { createStore, combineReducers } from 'redux';
import employeesReducer from '../reducer/employeesReducer.js';

// Combinez vos slices ici si vous en avez plusieurs
const rootReducer = combineReducers({
  employees: employeesReducer,
});

// Créez le store avec le réducteur combiné
const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);

export default store;