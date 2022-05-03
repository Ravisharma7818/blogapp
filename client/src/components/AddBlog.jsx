import React, { useState } from 'react'
import { Typography, Box, InputLabel, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import axios from 'axios';
const AddBlog = () => {
  const Navigate =useNavigate()
  const [blog, setBlogs] = useState("")
  const [input, setInputs] = useState({
    title: " ",
    desc: " ",
    image: " "
  })
  const sendRequest = async () => {
    const res = await axios.post("http://localhost:2000/api/addblog", {

      title: input.title,
      desc: input.desc,
      image: input.image,
      user: localStorage.getItem("UserId")
    }).catch((err) => console.log(err))
    const data = await res.data
    return data
  }



  const handleChange = (e) => {
    setInputs((pstate) => ({
      ...pstate,
      [e.target.name]: e.target.value
    }))

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    sendRequest().then((data) => setBlogs(data)).then(()=>Navigate('/blogs'))
    console.log(blog);
    // setInputs(" ");
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <Box border={1} borderRadius={10} boxShadow="5px 5px 10px #ccc" padding={3} p={5} m={10} display="flex" flexDirection={"column"} width={"80%"}>
        <Typography fontWeight={'bold'} padding={3} color="gray" variant="h4">Add Your Blog</Typography>

        <InputLabel sx={{ fontSize: '15px', fontWeight: 'bold' }}  >Title</InputLabel>
        <TextField onChange={handleChange} name="title" required value={input.title} />

        <InputLabel sx={{ fontSize: '15px', fontWeight: 'bold' }}>Description</InputLabel>
        <TextField onChange={handleChange} name="desc" required value={input.desc} />

        <InputLabel sx={{ fontSize: '15px', fontWeight: 'bold' }} >ImageUrl</InputLabel>
        <TextField onChange={handleChange} name="image" required value={input.image} />

        <Button variant="contained" p={3} type="submit">Submit</Button>

      </Box>
    </form>
  </div>
}

export default AddBlog