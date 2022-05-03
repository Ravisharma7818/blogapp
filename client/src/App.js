
import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import BlogDetails from './components/BlogDetails';
import AddBlog from './components/AddBlog';
import {authActions} from './store'
import { useDispatch, useSelector } from 'react-redux'

import {

  Routes,
  Route,
} from "react-router-dom";
function App() {
  const dispatch = useDispatch()

  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn);
useEffect(()=>{
  if(localStorage.getItem('UserId')){
    dispatch(authActions.login())

  }
},[dispatch])

  return <React.Fragment>
    <header>
      <Header />
    </header>
    <main>

      <Routes>

        {!isLoggedIn ? <><Route path="/" element={<Auth />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
        </>
          :
          <>

            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/myBlogs" element={<UserBlogs />}></Route>
            <Route path="/myBlogs/:id" element={<BlogDetails />}></Route>
            <Route path="/blogs/add" element={<AddBlog />}></Route></>}
      </Routes>
    </main>
  </React.Fragment>;

}

export default App;
