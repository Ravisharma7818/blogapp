const mongoose = require('mongoose');
const { Schema } = mongoose



const BlogSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }

})

module.exports = mongoose.model("Blog", BlogSchema)