import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import reducer from './reducer';
import reducer from './modules/text';


const store = createStore(reducer, applyMiddleware(thunk));

export default store;
