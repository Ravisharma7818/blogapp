const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const UserRoutes = require('./Routes/user_routes');
const BlogRoutes = require('./Routes/blog_routes');
const cors = require('cors');
const User = require('./Models/User');
const app = express();

app.use(cors())
// For Env File
dotenv.config()


// Express Middlware
app.use(express.json());


// Connection On Server 
const port = process.env.PORT
app.listen(port,()=>{
    console.log('Conn Success on ',port);
})



// Routes 
app.use('/api/user',UserRoutes);
app.use('/api',BlogRoutes);



// Mongoose Connection 
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connection Success ..');
}).catch((err) => {
    console.log(err);
});

