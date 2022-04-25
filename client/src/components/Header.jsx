import React from 'react'
import { AppBar, Typography, Toolbar, Box, Button, Tabs, Tab } from "@mui/material";
import { useState } from 'react';
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'


const Header = () => {
  const isLoggedIn = useSelector(state=>state.isLoggedIn);

  const [state, setState] = useState()

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

       { isLoggedIn && <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
          <Tabs value={state} onChange={(e, val) => setState(val)} textColor="inherit">
            <Tab label="All Blogs" LinkComponent={Link} to="/blogs"/>
            <Tab label="My Blogs" LinkComponent={Link} to="/myBlogs"/>

          </Tabs>

        </Box>}

        <Box display="flex" marginLeft="auto">
        
          {!isLoggedIn &&   <><Button variant="contained" color="warning" sx={{ margin: 1, borderRadius: 10 }} LinkComponent={Link} to="/Auth" >Login</Button>
          <Button variant="contained" color="warning" sx={{ margin: 1, borderRadius: 10 }} LinkComponent={Link} to="/Auth">Signup</Button> </>}
         {isLoggedIn && <Button variant="contained" color="warning" sx={{ margin: 1, borderRadius: 10 }} LinkComponent={Link} to="/Auth">Logout</Button>}
         
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header