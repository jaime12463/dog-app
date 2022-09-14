
import React , {useState} from 'react'
import  Grid  from '@mui/material/Grid'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SubBreeds from '../SubBreeds'

const renderSubBreeds = (subBreed,eventClick) => {
    console.log("Se renderiza de nuevo al click",subBreed.subBreed)
 return (
     <ListItem 
     key={subBreed.subBreed}
     >
         <Grid 
             container
             justifyContent='center'
             alignItems='center' >
 
                 <Grid item
                     sm={12}
                     xs={12}>
                     <SubBreeds eventClick={eventClick}  subBreed ={subBreed}  />
                </Grid>
 
         </Grid>  
     </ListItem>
    )
    
 }


const SubBreedList =({selectedBreed,eventClick})=> {
    console.log("Raza seleccionada ",selectedBreed)
    return (
        <div>       
                <List>
                    {
                       selectedBreed.subBreed.map(subBreed=>
                            renderSubBreeds(subBreed,eventClick)
                            )
                    }
                </List> 
        </div>       
    )
}

export default React.memo(SubBreedList)