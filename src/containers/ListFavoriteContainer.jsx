import React, {Component } from 'react'
import { connect } from 'react-redux';
import Favorites from '../components/Favorites';
import {setFavorite,setRemoveFavorite} from '../actions'

class ListFavoriteContainers  extends Component{

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
                <Favorites favoriteList ={this.props.listFavorite} evenClick = {this.handleSelectedFavorite} />
    )
}
     

}

const mapDispatchToProps =dispatch => ({
    setFavorite: value => dispatch(setFavorite(value)),
    setRemoveFavorite: value=>dispatch(setRemoveFavorite(value))
    })

const mapStateToProps = state=> ({
    listFavorite: state.favorites.items
})





export default connect(mapStateToProps,mapDispatchToProps) (ListFavoriteContainers)