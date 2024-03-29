import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {  getBlog, createBlog,blog } from './reducers/blogReducer'



const reducer = combineReducers({


    getBlog,
    createBlog,
    blog


});

const intitialeState = {
    
}; 

const middleware = [thunk]

const store = createStore(
    reducer,
    intitialeState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
