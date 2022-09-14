import {SET_SUB_BREED_IMAGE} from '../actions'
import { createSelector } from "reselect";
import toPairs from "lodash.topairs";
export const breedImagenList =(state={},action)=> {
 
    switch(action.type){
        case SET_SUB_BREED_IMAGE: {
            const {breed, subBreedImageList} = action.payload
                return {...state,[breed]:{...state[breed], subBreedImageList }}
        }
       
        default: 
            return state
    }
}


const fromObjToArray = (breedImagenList) => (toPairs(breedImagenList).map(([key,value]) => ({key, name: key,data: value.subBreedImageList}) ))

 export const getImageByBreed = 
createSelector ((state ,breed )=>fromObjToArray(state), breedImagenList => breedImagenList )
