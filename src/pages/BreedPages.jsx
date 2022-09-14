import React from 'react'

import { useNavigate} from 'react-router-dom';
import Paper from '@mui/material/Paper'
import AppFrame  from '../components/UI/AppFrame'
import BreedList from '../components/BreedList';
import BreedListContainers from '../containers/BreedListContainers';

const BreedPages = () => {
    

/*
    return (
        <AppFrame title ="Razas"> 
            <Paper elevation={3}>
                <BreedList data={data} actions = {actions} eventOnClickList ={onClickHandler} />
            </Paper>
            
        </AppFrame>
    )
    */
    return (
        <AppFrame title ="Razas"> 
            <Paper elevation={3}>
           
                <BreedListContainers />
            </Paper>
            
        </AppFrame>
    )

}

export default BreedPages