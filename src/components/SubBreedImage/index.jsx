import React ,{useMemo} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';


import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const SubBreedImage =({img,isFavorite,evenClick})=> {

  const [checked, setChecked] = React.useState(isFavorite);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    evenClick(event.target.checked)
  };
 
  

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return ( 
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="auto"
          width = '200px'
          image={img}
          alt="green iguana"
        />
        <CardActions>
        <Checkbox 
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
         {...label} 
         icon={<FavoriteBorder />} 
         checkedIcon={<Favorite />} />
   
        </CardActions>
      </Card>

    )
}


export default React.memo(SubBreedImage)