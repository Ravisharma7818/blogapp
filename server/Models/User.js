const mongoose = require("mongoose");
const bcrpt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"],

    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
    },
    blogs:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Blog",
            required:true,
       
        }
    ]
});

UserSchema.pre("save", async function (next) {
   
    const salt =await  bcrpt.genSalt(10);
    this.password =await bcrpt.hash(this.password, salt)
    next();
})

UserSchema.methods.matchPasswords = async function (password) {
    return await bcrpt.compare(password, this.password)
}

module.exports = mongoose.model("User", UserSchema);