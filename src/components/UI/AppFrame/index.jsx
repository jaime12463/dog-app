import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import IconButton  from '@mui/material/IconButton'
import { IconContext } from 'react-icons'
import Grid  from '@mui/material/Grid'
import Link  from '@mui/material/Link'
import Typography  from '@mui/material/Typography'
import Toolbar  from '@mui/material/Toolbar'
import { SiDatadog } from 'react-icons/si'
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link as LinkRouter} from 'react-router-dom'

const AppFrame = ({title,children}) => {
  return (
    <Grid container
        justifyContent='center'
        >
            <AppBar position='static'>
                <Toolbar variant='dense'>
                    <IconButton color='inherit' aria-label="menu">
                    <Link
                            component={LinkRouter}
                            to ="/" 
                            color="inherit" 
                            aria-label="menu" >
                           <IconContext.Provider value={{size:'2em'}} >
                                <SiDatadog />
                            </IconContext.Provider>
                        </Link>
                           
                            
                       
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>

                    <IconButton color='inherit' aria-label="menu">
                    <Link
                            component={LinkRouter}
                            to ="/favorite" 
                            color="inherit" 
                            aria-label="menu" >
                           <IconContext.Provider value={{size:'2em'}} >
                                <FavoriteIcon />
                            </IconContext.Provider>
                           Favoritos
                        </Link>
                           
                            
                       
                    </IconButton>

                </Toolbar>
            </AppBar>
            <Grid  item 
                xs={12}
                sm={11}
                md={10}
                lg={8}>
                    {children}
            </Grid>
    </Grid>
  )
}

AppFrame.propTypes = {
    children: PropTypes.node
}

export default AppFrame