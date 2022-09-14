import { createSelector } from "reselect";
import toPairs from "lodash.topairs";
import { SET_BREEDS_DATA ,SET_SUB_BREED } from "../actions";

export const breeds =(state={},action)=> {
 
    switch(action.type){
        case SET_BREEDS_DATA: {
            const {breed} = action.payload
                return {...state,[breed.breed]:{...state[breed.breed], breed }}
        }
        case  SET_SUB_BREED :{
            const {breed, subBreed }=action.payload
            return {...state,[breed]:{...state[breed],  subBreed}}
        }        
        default: 
            return state
    }
}

export const getSubBredListByBreed = 
    createSelector((state,breed ) =>state[breed] && state[breed].breed, breed => breed);

const fromObjToArray = breeds => (toPairs(breeds).map(([key,value]) => ({key, name: key,data: value.breed}) ))

export const getAllBreeds = 
createSelector (state=>fromObjToArray( state), breeds => breeds )
