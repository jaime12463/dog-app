
import React from 'react'
import { IconContext } from 'react-icons'


import  Grid  from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'

const SubBreeds = ({eventClick,subBreed }) => { 
    const [checked, setChecked] = React.useState(subBreed.isSelected);

    const handleChange = (event)  =>{
      setChecked(event.target.checked);
      eventClick(subBreed.subBreed,event.target.checked)      
    };

    return (
        <Grid container item
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={1}> 

        <Grid item
                    sm={1}
                    xs={1}>
      <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }} />  
                </Grid>
                <Grid item 
                    sm={10}
                    xs={10}>               
                <Typography display="inline" variant='h6' >{subBreed.subBreed}</Typography>
                </Grid>
        </Grid>
    )
}

export default SubBreeds