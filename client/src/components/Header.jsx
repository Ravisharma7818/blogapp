import React from 'react'
import { AppBar, Typography, Toolbar, Box, Button, Tabs, Tab } from "@mui/material";
// import { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import {useNavigate} from 'react-router-dom'
import { authActions } from '../store';

const Header = () => {
  const navigate = useNavigate()

  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch()
const logoutFunction = (e) =>{
  e.preventDefault();
  dispatch(authActions.logout())
  navigate('/auth')
}

  // const [state, setState] = useState()

  return (

    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);"
      }}>

      <Toolbar>
        <Typography
          variant="h4"
          sx={{ margin: 1, borderRadius: 10, cursor: "pointer" }}> BlogsApp</Typography>

        {isLoggedIn && <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
          <Tabs value ={1}  textColor="inherit">
            <Tab label="Add Blog" value ={1}  LinkComponent={Link} to="/blogs/add" />
            <Tab label="All Blogs" value ={1}  LinkComponent={Link} to="/blogs" />
            <Tab label="My Blogs" value ={1}  LinkComponent={Link} to="/myBlogs" />


          </Tabs>

        </Box>}

        <Box display="flex" marginLeft="auto">

          {!isLoggedIn && <><Button variant="contained" color="warning" sx={{ margin: 1, borderRadius: 10 }} LinkComponent={Link} to="/Auth" >Login</Button>
            <Button variant="contained" color="warning" sx={{ margin: 1, borderRadius: 10 }} LinkComponent={Link} to="/Auth">Signup</Button> </>}
          {isLoggedIn && <Button onClick = {logoutFunction} variant="contained" color="warning" sx={{ margin: 1, borderRadius: 10 }} LinkComponent={Link} to="/Auth">Logout</Button>}

        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header