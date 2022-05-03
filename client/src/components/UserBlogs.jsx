import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Blog from './Blog'

const UserBlogs = () => {
  const [user, setUser] = useState();
  const [username, SetUserName] = useState();

  const id = localStorage.getItem("UserId");

  const sendRequest = async () => {
    const res = await axios.get(`http://localhost:2000/api/user/${id}`).catch((err) => console.log(err))

    const data = await res.data
    SetUserName(data.user.name);
    return data
  }
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, [])
  console.log(user);
  console.log(username);
  return (

    <div>
      {" "}
      {user && user.blogs.map((blog, index) =>

        <Blog
        isUser={true}
          key={index}
          title={blog.title}
          desc={blog.desc}
          image={blog.image}
          user={username}
        />)}</div>


  )

}

export default UserBlogs