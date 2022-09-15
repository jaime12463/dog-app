import React from 'react'
import Paper from '@mui/material/Paper'
import AppFrame  from '../components/UI/AppFrame'
import ListFavoriteContainer from '../containers/ListFavoriteContainer';

const BreedPages = () => {
    

    return (
        <AppFrame title ="Favoritos"> 
            <Paper elevation={3}>
                <ListFavoriteContainer />
            </Paper>
            
        </AppFrame>
    )

}

export default BreedPages