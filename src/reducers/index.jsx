import { combineReducers } from "redux"
import { createSelector } from "reselect"
import { breeds ,
    getAllBreeds as _getAllBreeds,
    getSubBredListByBreed as _getSubBredListByBreed} from "./breeds"
import {breed } from './breed'
import { subBreeds } from "./subBreeds"
import {breedImagenList ,
    getImageByBreed as  _getImageByBreed} from './breedImageList'
import { favorites } from "./favorites"


export default combineReducers({
    breeds,
    breed,
    subBreeds,
    breedImagenList,
    favorites
})

/*
export const getCity = createSelector( state =>state.city,city=> city );
export const getForecastDataFromCities = 
createSelector(state => state.cities ,getCity , _getForecastDataFromCities)
*/

export const getBreed = createSelector( state =>state.breed ,breed=> breed );

export const getSubBredListByBreed = 
createSelector(state => state.breeds ,getBreed , _getSubBredListByBreed)

export const getAllBreeds = 
createSelector (state => state.breeds, _getAllBreeds)
export const getImageByBreed = 
createSelector(state=> state.breedImagenList , getBreed, _getImageByBreed)
