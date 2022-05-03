import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Typography, Box, InputLabel, TextField, Button } from '@mui/material'

const BlogDetails = () => {
const navigate = useNavigate()
  const [input, setInputs] = useState({
    title: " ",
    desc: " ",
    image:""
    
  })
  const [blog, setBlogs] = useState('')
  const id = useParams().id;
  console.log(id)
  const fethcDetails = async () => {
    const res = await axios.get(`http://localhost:2000/api/${id}`);
    const data = await res.data
    console.log(data);
    return data;
  }
  const handleChange = (e) => {
    setInputs((pstate) => ({
      ...pstate,
      [e.target.name]: e.target.value
    }))

  }

  useEffect(() => {
    fethcDetails().then((data) => {
      setBlogs(data.blog)
      setInputs({ title: data.blog.title, desc: data.blog.desc, image: data.blog.image })
    })
  }, [id])



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    sendRequest().then(data =>console.log(data)).then(()=>navigate('/myBlogs'))

  }

const sendRequest = async() =>{
  const res = await axios.put(`http://localhost:2000/api/editblog/${id}`,{
    title:input.title,
    desc:input.desc,
    image:input.image
  }).catch(err=>console.log(err))
  const data = await res.data
  return data
}

  console.log(blog);
  return (
    <>
      {input &&
        <form onSubmit={handleSubmit}>
          <Box border={1} borderRadius={10} boxShadow="5px 5px 10px #ccc" padding={3} p={5} m={10} display="flex" flexDirection={"column"} width={"80%"}>
            <Typography fontWeight={'bold'} padding={3} color="gray" variant="h4">Update Your Blog</Typography>

            <InputLabel sx={{ fontSize: '15px', fontWeight: 'bold' }}  >Title</InputLabel>
            <TextField onChange={handleChange} name="title" required value={input.title} />

            <InputLabel sx={{ fontSize: '15px', fontWeight: 'bold' }}>Description</InputLabel>
            <TextField onChange={handleChange} name="desc" required value={input.desc} />

            <InputLabel sx={{ fontSize: '15px', fontWeight: 'bold' }} >ImageUrl</InputLabel>
        <TextField onChange={handleChange} name="image" required value={input.image} />

            <Button variant="contained" p={3} type="submit">Submit</Button>

          </Box>
        </form>}
    </>
  )
}

export default BlogDetails