import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import  Grid  from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const Breed = ({breed , quantitySubBreed}) => {
    return (
        <Grid container item
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={1}> 
        <Grid item
                    sm={10}
                    xs={10}>
                    <Typography display="inline" variant='h6' >{breed}</Typography>
                </Grid>
                <Grid item 
                    sm={2}
                    xs={2}>            
                    <Typography display="inline" variant='h6' >{quantitySubBreed}</Typography>
                </Grid>
        
       

        </Grid>
    )
}

export default Breed