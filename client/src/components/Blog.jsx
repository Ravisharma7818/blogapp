import React from 'react'
import {Typography, Avatar,CardHeader,CardMedia,CardContent,Card} from '@mui/material'
const Blog = () => {
  return (
    <>

      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor:" red[500]" }} aria-label="recipe">
              R
            </Avatar>
          }
         
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
   
          <CardContent>
           
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
  
      </Card>
    </>
  )
}

export default Blog