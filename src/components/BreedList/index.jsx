import React from 'react'

import  Grid  from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/List'
import Breed from '../Breeds'
import { useNavigate} from 'react-router-dom';


const renderBreeds =eventOnClickList=> breed => {
return (
    <ListItem 
    button="true" 
        key ={breed.name} 
        onClick={()=>eventOnClickList (breed.name)}
     >
        <Grid 
            container
            justifyContent='center'
            alignItems='center' >

                <Grid item
                    sm={12}
                    xs={12}>
                    <Breed breed={breed.data.breed} quantitySubBreed={breed.data.quantitySubBreed}/>
                </Grid>

        </Grid>
         
         
    </ListItem>
   )
}


const BreedList =({allBreeds ,setSelectedBreed})  => {

    let navigate = useNavigate()

    const onClickHandler =React.useCallback((breed) => {
        setSelectedBreed(breed)
      navigate(`/breed/${breed}` )  
    },[navigate]) 

    return (
       <div> 
        <List>
            {
              allBreeds.map(breed => 
                renderBreeds(onClickHandler)(breed))
            }
        </List>
       </div>
    )
}


export default BreedList