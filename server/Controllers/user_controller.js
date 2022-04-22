const { mongoose } = require('mongoose');
const User = require('../Models/User');


module.exports.getAlluser = async (req, res, next) => {
    let users;

    try {
        users = await User.find()
    } catch (error) {
        console.log(error);
    }
    if (!users) {
        return res.status(404).json({ message: "No User Found" })
    }
    return res.status(200).json({ users })
}



exports.register = async (req, res, next) => {
    const { name, email, password } = req.body;
    const Dbemail =await  User.findOne({email})

    if(Dbemail)
    {
        return res.send('Already Registered')
    }
    try {
        const user = await User.create({
            name,
            email,
            password,
        });
        res.send(user)
        user.save()
    } catch (error) {
        res.send(error);
    }
};



exports.login = async (req, res, next) => {
    const { email, password } = req.body;


    if (!email || !password) {
        return res.status(400).json({ message: 'Plz Provide Details' })
    }

    try {
        const user = await User.findOne({ email }).select("+password");
        const users = await User.findOne({ email }).select("+_id");


        if (!user) {

            return res.status(400).json({ message: 'Invalid Credentials' })
        }
        const Pass_Match = await user.matchPasswords(password);
        console.log(Pass_Match); 
        if (!Pass_Match) {
            return res.send('Password Not Correct')
        }
        res.status(500).json({
            success: true,
            user: users,
        });


    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};