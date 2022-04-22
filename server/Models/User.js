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
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = bcrpt.genSaltSync(10);
    this.password = bcrpt.hashSync(this.password, salt)
    next();
})

UserSchema.methods.matchPasswords = async function (password) {
    return await bcrpt.compare(password, this.password)
}

module.exports = mongoose.model("User", UserSchema);
