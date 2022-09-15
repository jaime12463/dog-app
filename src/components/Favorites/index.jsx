
import React from 'react'
import  Grid  from '@mui/material/Grid'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SubBreedImage from '../SubBreedImage';


const renderFavorites = (img,evenClick) => {
    const onClick =(value)=>{
        const favorite = {
            imagen: img.imagenName ,
            isFavorite : value
        }
        evenClick(img.imageName,value)
        

    }
 return (
     <ListItem
     key={img.imageName}
     >
         <Grid 
             container
             justifyContent='center'
             alignItems='center' >
 
                 <Grid item
                     sm={12}
                     xs={12}>
                   <SubBreedImage img = {img.imageName} isFavorite ={img.isFavorite} evenClick={onClick} />
                </Grid>
 
         </Grid>
          
          
     </ListItem>
    )
    
 }


const Favorites =({favoriteList,evenClick})=> {
    return (
        <div>  
                   
                <List>
                    {
                         favoriteList.map(img=>
                            renderFavorites(img,evenClick)
                            )
                    }
                </List> 
                    

        </div>       
    )
    
}

export default Favorites