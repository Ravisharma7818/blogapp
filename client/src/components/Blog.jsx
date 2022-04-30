import React from 'react'
import { Typography, Avatar, CardHeader, CardMedia, CardContent, Card } from '@mui/material'
const Blog = ({title,desc ,image,user}) => {
  return (
    <>

      <Card sx={{
        width: "30%", margin: 'auto', mt: 2, padding: 2, boxShadow: "1px 5px 5px  #ccc", ":hover": {

          boxShadow: "1px 5px 8px  #ccc"
        }
      }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: " red" }} aria-label="recipe">
            U
            </Avatar>
          }

          title={title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Paella dish"
        />
       

        <CardContent>

          <Typography>
         {desc}
          </Typography>
        </CardContent>

      </Card>
    </>
  )
}

export default Blog