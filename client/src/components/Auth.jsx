import { Typography, Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Auth = () => {
  const [isSignup, setSignup] = useState(false)

  return (
    <div>
      <form>
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
          <Typography padding={3} variant="h5" textAlign="center">          {isSignup ? 'Signup ' : "Login"}
          </Typography>
          {isSignup && <TextField margin="normal" type="text" placeholder='Name' />}
          <TextField margin="normal" type="email" placeholder='Email' />
          <TextField margin="normal" type="password" placeholder='Password' />
          <Button variant="contained" sx={{ borderRadius: 4 }} color="warning">Submit</Button>
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