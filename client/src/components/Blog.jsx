import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Typography, Avatar, CardHeader, CardMedia, CardContent, Card, Box, IconButton } from '@mui/material'
// import {EditIcon} from '@mui/icons-material/Edit';
const Blog = ({ title, desc, image, user, isUser, id }) => {

  const Navigate = useNavigate();
  const handleEdit = (e) => {
    Navigate(`/myBlogs/${id}`)
  }
  const deleteRequest = async () => {
    const res = await axios.delete(`http://localhost:2000/api/deleteblog/${id}`).catch(err => console.log(err))
    const data = await res.data;
    return data
  }

  const handleDelete = () => {
    deleteRequest().then(() => Navigate('/myBlogs'))
  };

  return (
    <>

      <Card sx={{
        width: "30%", margin: 'auto', mt: 2, padding: 2, boxShadow: "1px 5px 5px  #ccc", ":hover": {

          boxShadow: "1px 5px 8px  #ccc"
        }
      }}>
        {isUser && (
          <Box display="flex">

            <IconButton sx={{ marginLeft: "auto" }} onClick={handleEdit}>
              <i class='fas fa-edit'></i>
            </IconButton>
            <IconButton onClick={handleDelete} >
              <i class="fa fa-trash" ></i>
            </IconButton>



          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: " red" }} aria-label="recipe">
              {user.slice(0, 1)}
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