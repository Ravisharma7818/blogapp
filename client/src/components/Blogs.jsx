import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Blog from './Blog'
const Blogs = () => {

  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios.get("http://localhost:2000/api/getblog").catch((err) => console.log(err))

    const data = await res.data
    return data
  }
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data));
  }, [])

  console.log(blogs)
  return (
    <>
      <Blog />
    </>
  )
}

export default Blogs