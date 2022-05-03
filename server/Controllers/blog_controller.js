const { default: mongoose } = require('mongoose');
const Blog = require('../Models/Blog');
const User = require('../Models/User')

module.exports.getAllBlog = async function (req, res, next) {

    const blogs = await Blog.find().populate('user');
    try {
        res.status(200).json(blogs)
        // console.log(user_blog);
    } catch (error) {
        console.log(error);
    }
    if (!blogs) {
        return res.status(404).json("No blog found");
    }
}


module.exports.AddBlog = async function (req, res, next) {

    const { title, desc, image, user } = req.body;
    try {
        var user_exist = await User.findById(user);
        console.log(user_exist);
    }
    catch (err) {
        console.log(err);
    }

    if (!user_exist) {
        return res.status(404).json("Unable To Find User By This Id");

    }
    const blog = new Blog({
        title,
        desc,
        image,
        user
    })
    try {

        // main Area 
        const session = await mongoose.startSession();
        session.startTransaction();
        await blog.save({ session });
        user_exist.blogs.push(blog);
        await user_exist.save({ session });
        await session.commitTransaction();
        return res.status(200).json({ blog, user_exist });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error });

    }

}


module.exports.EditBlog = async function (req, res, next) {

    const blog_id = req.params.id;
    const { title, desc ,image } = req.body;
    let blog
    try {
        blog = await Blog.findByIdAndUpdate(blog_id, {
            title, desc ,image


        })
    } catch (error) {
        console.log(error);
    }
    if (!blog) {
        return res.status(500).json("Unable To Update Blog");

    }
    return res.status(200).json({ blog });


}




module.exports.DeleteBlog = async function (req, res, next) {

    const user_id = req.params.id
    const user = User.findById(user_id);

    console.log(user);
    if (user) {


        try {
            findByIdAndRemove(user_id).Blog
            res.send('Succesfully deleted')

        } catch (error) {
            console.log(error);

        }


    }

}



module.exports.getBlogById = async function (req, res, next) {
    let blog_id = req.params.id;
    try {
        const blog = await Blog.findById(blog_id);
        console.log(blog);
        if (blog) {
            res.send({ blog })
        }
        else {
            return res.status(404).json("No blog found");
        }

    } catch (error) {
        console.log(error);
    }

}


module.exports.DeleteBlog = async function (req, res, next) {
    let blog_id = req.params.id;
    try {
        const blog = await Blog.findByIdAndRemove(blog_id);

        return res.status(200).json("Succesfully DeleteBlog");

    } catch (error) {
        console.log(error);
    }


}


module.exports.getByUserId = async function (req, res) {
    const u_id = req.params.id;
    // const user = await User.findById(u_id);
    let userblog;
    try {
        userblog = await User.findById(u_id).populate("blogs")
        console.log(userblog);
        return res.status(200).json({ user: userblog });

    } catch (error) {
        console.log(error);

    }
    if (!userblog) {
        return res.status(404).json("No Blog Found");

    }
}