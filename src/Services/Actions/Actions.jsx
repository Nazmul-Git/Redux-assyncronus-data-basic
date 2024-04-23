import axios from 'axios';
import { TODOS_FAILD, TODOS_REQUEST, TODOS_SUCCESS } from '../Constants/Constants';

export const getAllTodos=()=>async (dispatch)=>{
    dispatch({
        type: TODOS_REQUEST
    });
    try {
        const res= await axios.get('https://jsonplaceholder.typicode.com/todos');
        dispatch({
            type: TODOS_SUCCESS,
            payload: res.data
        }); 
    } catch (error) {
        dispatch({
            type: TODOS_FAILD,
            payload: error.message
        }) 
    }

}