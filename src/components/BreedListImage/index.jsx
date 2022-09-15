
import React from 'react'
import  Grid  from '@mui/material/Grid'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SubBreedImage from '../SubBreedImage';

const renderSubBreeds = (img,eventClick,favoriteList) => {
    
    const isFavorite = favoriteList.filter(item => item.imageName===img.imageName).length>0  ? favoriteList.filter(item => item.imageName===img.imageName)[0].isFavorite: false
    const onClick =(value)=>{
        eventClick(img.imageName,value)

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
                      <SubBreedImage img = {img.imageName} isFavorite={isFavorite} evenClick={onClick}/>
                   </Grid>
    
            </Grid>
        </ListItem>
       )
    
 }


const BreedListImage =({selectedBreed,imageList,eventClick,favoriteList})=> {

   const ImageListView = imageList.filter(item => item.name ===selectedBreed.breed)[0].data
  
   return (
        <div>
             <List>
            {
                ImageListView.map(item => renderSubBreeds( item,eventClick,favoriteList) )
            }
            </List>  
           
        </div>
    )
}

export default React.memo(BreedListImage)