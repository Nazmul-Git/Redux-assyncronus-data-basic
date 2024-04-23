import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import todosReducer from "../Services/Reducers/Reducers";


const store= createStore(todosReducer, applyMiddleware(thunk));
console.log(store)
export default store;
