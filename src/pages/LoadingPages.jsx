import  Grid  from '@mui/material/Grid'
import React from 'react' 
import LogoFemsa from '../assests/images/dog-api-logo.png'

import Typography from '@mui/material/Typography'

import {useTranslation} from 'react-i18next';
//import LogoFemsa from 'assests/images/dog-api-logo.svg';
const LoadingPages = () => {
    const {t} = useTranslation()
    console.log("hasta Aqui bien")
    return (
    
            <Grid container
              direction='column'
              justifyContent='center'
              className='full'>
                      <Grid item
                      container 
                      direction='column'
                      justifyContent='center'
                      alignItems='center' >
                    <img
                            src={LogoFemsa}
                            //onClick={() => history.push("")}
                            style={{width: '188px', height: '169px'}}
                            alt='logo'
                            data-cy='boton-splash'
                        />
                         <Typography variant='h3' color='inherit'>
                            {t('Loading ......')}
                        </Typography>     
            </Grid>
        </Grid>

           

    )
    
}

export default LoadingPages
