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
  const a =localStorage.getItem('UserId')
  console.log(a);

  return <div> {blogs && blogs.map((blog, index) => 

    <Blog
    key={blog.index}
    id={blog._id}
    isUser={blog.user._id ===localStorage.getItem('UserId')}
     user={blog.user.name}
      title={blog.title} 
      desc={blog.desc} 
      image={blog.image}  />)}</div>
 
  
}

export default Blogs              