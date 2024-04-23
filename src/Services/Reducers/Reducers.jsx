import { TODOS_FAILD, TODOS_REQUEST, TODOS_SUCCESS } from "../Constants/Constants";

const initialState= {
    isLoading: false,
    todos: [],
    error: null
}

const todosReducer=(state=initialState, action)=>{
    switch (action.type) {
        case TODOS_REQUEST:
            return{
                ...state,
                isLoading:true
            }
        case TODOS_SUCCESS:
            return{
                isLoading: false,
                todos: action.payload,
                error: null
            }
        case TODOS_FAILD:
            return{
                isLoading:false,
                todos:[],
                error:action.payload
            }
            
    
        default:
            return state;
    }
}

export default todosReducer;