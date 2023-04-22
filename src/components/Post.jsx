import { Box, Checkbox } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import image from  './image.png'
import { Favorite, FavoriteBorder } from '@mui/icons-material';

function Post(props) {
  return (
    <Card sx={{margin:"10px"}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500]}} aria-label="recipe" src={image}/>
      
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={props.title}
      subheader="MARCH 15,2023"
    />
    <CardMedia
      component="img"
      height="20%"
      image={props.image}
      alt="trees"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      Trees and the Soul. “A tree is our most intimate contact with nature.” 
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite  sx={{color:"red"}}/>} />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
     </CardActions>
  </Card>
  )
}

export default Post
