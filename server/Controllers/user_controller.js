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
    console.log("I Am Working");

    const { name, email, password } = req.body;
    
    const Dbemail =await  User.findOne({email})

    if(Dbemail)
    {
        return res.send({
            success:false,
            message:'User Already Registered',
            status: 404
        })
    }
    try {
       const user =await  User.create({
          name,
          email,
         password,
         blog:[]

       })
       console.log(user);
    
       res.status(200).json({
        success: true,
        user: user,

    });

          user.save()
    } catch (error) {
        res.send(error,("He "));
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
        
        
        return res.status(200).json({ users})
       


    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};