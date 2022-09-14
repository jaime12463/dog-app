
import {getAllBreedsURL,getBreedImageURL} from '../utils/urls'

export const SET_BREED ='SET_BREED'
export const SET_BREEDS_DATA = 'SET_BREEDS_DATA' 
export const SET_SUB_BREED ='SET_SUB_BREED'
export const ADD_ITEM_SUB_BREED ='ADD_ITEM_SUB_BREED'
export const REMOVE_ITEM_SUB_BREED ='REMOVE_ITEM_SUB_BREED'
export const SET_SUB_BREED_IMAGE='SET_SUB_BREED_IMAGE'
export const ADD_ITEM_FAVORITE ='ADD_ITEM_FAVORITE'
export const REMOVE_ITEM_FAVORITE ='REMOVE_ITEM_FAVORITE'

const setBreedData = payload  => ({type: SET_BREEDS_DATA, payload})
const setAllSubBreedImagenData =payload => ({type: SET_SUB_BREED_IMAGE, payload})

export const setBreed =payload => (
    {type: SET_BREED, payload}
    
    )
export const setSubBreed =payload => ({type: SET_SUB_BREED, payload})
export const setSubBreedList =payload => ({type: ADD_ITEM_SUB_BREED, payload})
export const removeSubBreedList =payload => ({type: REMOVE_ITEM_SUB_BREED, payload})
export const setFavorite = payload=> ({type :ADD_ITEM_FAVORITE ,payload})
export const setRemoveFavorite = payload=> ({type :REMOVE_ITEM_FAVORITE ,payload})
 const setAllSubBreedImagen =(payload) => {

    return (dispatch)=>{
        const url=getBreedImageURL(payload)
      
        return fetch(url).then(
           data => ( data.json())
           ).then(subBreedImage => {
                const subBreedImageList =subBreedImage.message.map(obj => {
                    return ( 
                        {
                            imageName : obj 
                        }
                    )
                })
              

                dispatch(setAllSubBreedImagenData({breed :payload,subBreedImageList}))
           })

    }
        
          
        }

        
    


export const setAllBreeds=() =>  {

    return async (dispatch,getState) => {

        const state = getState()
       // console.log("Estado global",state)
        const url= getAllBreedsURL ()
        console.log("state.breed",state.breed ==='Sin Datos')
        if (state.breed === 'Sin Datos'){
            const data = await fetch(url)
            const breeds = await (data.json())
    
            for (let clave in breeds.message) {
    
                const subBreedaux = breeds.message[clave]
                const quantitySubBreedAux = subBreedaux.length
    
                const subBreed = subBreedaux.map(sub => {
                    return (
                        {
                            subBreed: sub,
                            isSelected: false
                        }
                    )
                }
    
                )
                const breed = {
                    breed: clave,
                    quantitySubBreed: quantitySubBreedAux,
                    subBreed: subBreed
                }
             
                dispatch(setBreedData( {breed} ))
                dispatch(setAllSubBreedImagen(breed.breed))
            }

            dispatch(setBreed("Finalizado"))
            
        }
        else{
            return;
        }
       

    }

  

} 