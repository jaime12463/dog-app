import { createSelector } from "reselect";
import toPairs from "lodash.topairs";
import toFilter from "lodash.filter"
import { ADD_ITEM_SUB_BREED ,REMOVE_ITEM_SUB_BREED } from "../actions";

export const subBreeds =(state={items:[]},action)=> {
    switch(action.type){
        case 'ADD_ITEM_SUB_BREED': {
                return {...state, items : [...state.items, action.payload]}
        }
        case  REMOVE_ITEM_SUB_BREED :{
            return { ...state, items: state.items.filter(i =>i.SelectedSubBreed !== action.payload
                 )}
        }        
        default: {
            return state
        }
            
    }
}