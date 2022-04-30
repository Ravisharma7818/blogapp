
import './App.css';
import React from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import BlogDetails from './components/BlogDetails';
import AddBlog from './components/AddBlog';

import {useSelector} from 'react-redux'

import {

  Routes,
  Route,
} from "react-router-dom";
function App() {

   useSelector(state=>state.isLoggedIn);
  // console.log(isLoggedIn);


  return <React.Fragment>
    <header>
      <Header />
    </header>
    <main>

      <Routes>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/myBlogs" element={<UserBlogs />}></Route>
        <Route path="/myBlogs/:id" element={<BlogDetails />}></Route>
        <Route path="/blogs/add" element={<AddBlog />}></Route>
      </Routes>
    </main>
  </React.Fragment>;

}

export default App;
