import { Typography, Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

import { authActions } from '../store';

const Auth = () => {
  const navigate = useNavigate()
  // const [data_user, userData] = useState()
  const [isSignup, setSignup] = useState(false)
  const [input, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  })
  const dispatch = useDispatch()



  const handleChange = (e) => {
    setInputs((pstate) => ({
      ...pstate,
      [e.target.name]: e.target.value
    }))
  }

  const sendRequest = async (type = "login") => {
    const res = await axios.post(`http://localhost:2000/api/user/${type}`, {
      name: input.name,
      email: input.email,
      password: input.password
    }).catch((e) => console.log(e))



    const data = await res.data
    console.log(data);
    return data
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      sendRequest("register").then((data) => localStorage.setItem("UserId", data.users._id)).then(() => dispatch(authActions.login())).then(() => navigate('/blogs')).then((data) => console.log(data));

    }
    else {
      sendRequest().then((data) => localStorage.setItem("UserId", data.users._id)).then(() => dispatch(authActions.login())).then(() => navigate('/blogs'))
    }


  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="2px 4px 15px 2px #ccc"
          padding={3}
          margin="auto"
          marginTop={10}
          borderRadius={5}

        >
          <Typography padding={3} variant="h5" textAlign="center">{isSignup ? 'Signup ' : "Login"}
          </Typography>
          {isSignup && <TextField margin="normal" type="text" placeholder='Name' value={input.name} onChange={handleChange} name="name" required />}
          <TextField required margin="normal" type="email" placeholder='Email' value={input.email} name="email" onChange={handleChange} />
          <TextField required margin="normal" type="password" placeholder='Password' value={input.password} name="password" onChange={handleChange} />
          <Button variant="contained" sx={{ borderRadius: 4 }} color="warning" type="Submit">Submit</Button>
          <Button onClick={() => setSignup(!isSignup)} sx={{ borderRadius: 4, marginTop: 2 }}>

            Move To
            {isSignup ? ' Login ' : " Signup"}
          </Button>

        </Box>
      </form>
      
    </div>

  )
}

export default Auth