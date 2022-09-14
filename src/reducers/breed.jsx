import { SET_BREED } from "../actions"
export const breed=(state={},action)=>{
    switch(action.type){
        case SET_BREED: 
            return  action.payload
        default: 
            return state
    }
}