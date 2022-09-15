import React, { Component } from 'react'
;
import Paper from '@mui/material/Paper'
import AppFrame  from '../components/UI/AppFrame'
import SubBreedList from '../components/SubBreedList';
import SubBreedListImage from '../components/SubBreedListImage';


import { connect } from 'react-redux';
import {getBreed,getSubBredListByBreed,getImageByBreed} from '../reducers'
import {setSubBreed,setSubBreedList,removeSubBreedList,setFavorite,setRemoveFavorite} from '../actions'
import BreedListImage from '../components/BreedListImage';

class SubBreedListContainers  extends Component{

    handleSelectedSubBreed = (SelectedSubBreed,value) => {
        const {breed} =this.props
        const subBreed = this.props.selectedBreed.subBreed 
       
        subBreed.map(item => {
             if (item.subBreed ===SelectedSubBreed )
                item.isSelected = value 
                return item
         }
            )
        this.props.setSelectedSubBreed (  {breed,subBreed } )
        if (value===true){
            this.props.setSubBreedList({SelectedSubBreed})
        }
        else {
            this.props.removeSubBreedList({SelectedSubBreed})
        }
      }

      handleSelectedFavorite = (imageName,value) => {
       if (value==true){
        this.props.setFavorite({imageName,isFavorite:value})
       }
       else {
        this.props.setRemoveFavorite({imageName,value})
       }
        
      }
  
 

render () {
    return ( 
        <AppFrame title={this.props.breed} >
            <Paper elevation={3}> 
            {
                this.props.selectedBreed.quantitySubBreed> 0 && <SubBreedList selectedBreed={this.props.selectedBreed} eventClick={this.handleSelectedSubBreed} />
            }
            {
                this.props.selectedBreed.quantitySubBreed> 0 &&  <SubBreedListImage 
                                            selectedBreed={this.props.selectedBreed}  
                                            imageList = {this.props.getImageByBreed} 
                                            eventClick={this.handleSelectedFavorite}
                                            favoriteList ={this.props.favoriteList}/>   
            }
               {
                this.props.selectedBreed.quantitySubBreed==0 &&  <BreedListImage 
                                            selectedBreed={this.props.selectedBreed}  
                                            imageList = {this.props.getImageByBreed} 
                                            eventClick={this.handleSelectedFavorite} 
                                            favoriteList ={this.props.favoriteList}/>   
            }
                 
                
            </Paper>
        </AppFrame>
        
    )
}
    
    

}

const mapDispatchToProps =dispatch => ({
    setSelectedSubBreed : (value)=> dispatch(setSubBreed(value) ),
    setSubBreedList : (value)=> dispatch(setSubBreedList(value)),
    removeSubBreedList: value => dispatch(removeSubBreedList(value)),
    setFavorite: value => dispatch(setFavorite(value)),
    setRemoveFavorite: value=>dispatch(setRemoveFavorite(value))
    })

const mapStateToProps = state=> ({
    breed: getBreed(state),
    selectedBreed : getSubBredListByBreed(state),
    getImageByBreed: getImageByBreed(state),
    listSubBreed: state.subBreeds,
    favoriteList: state.favorites.items
})



export default connect(mapStateToProps,mapDispatchToProps) (SubBreedListContainers)