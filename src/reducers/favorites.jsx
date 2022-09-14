import { ADD_ITEM_FAVORITE,REMOVE_ITEM_FAVORITE } from "../actions";

export const favorites =(state={items:[]},action)=> {
    switch(action.type){
        case ADD_ITEM_FAVORITE: {
                return {...state, items: [...state.items, action.payload]}
        } 
        case REMOVE_ITEM_FAVORITE: {
            const {imageName }=action.payload
            return { ...state, items: state.items.filter(i => i.imageName !== imageName)}
     } 
        default: {
            return state
        }
            
    }
}