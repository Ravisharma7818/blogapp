const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./Routes/user_routes')
const app = express();


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
app.use('/api/user',routes)




// Mongoose Connection 
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connection Success ..');
}).catch((err) => {
    console.log(err);
});

