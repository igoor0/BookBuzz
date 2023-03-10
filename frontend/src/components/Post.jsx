import React, { useEffect, useState } from 'react'
import { Avatar, Card, CardHeader, CardMedia, IconButton } from '@mui/material'
import { CardContent, CardActions, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Checkbox from '@mui/material/Checkbox';
 
 const Post = (props) => {

  const dataDocs = props.dataDocs;
  
   return (
    <Card sx={{margin: 5}}> 
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={dataDocs}
      subheader="September 14, 2022"
    />
    <CardMedia
      component="img"
      height="20%"
      image="https://mui.com/static/images/cards/paella.jpg"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red',}}/>} />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
   )
 }
 
 export default Post