const { Router } = require('express');
const {getAllBlog ,AddBlog, EditBlog, DeleteBlog ,getBlogById} = require('../Controllers/blog_controller');

const router = require("express").Router();

router.get('/getblog',getAllBlog);
router.post('/addblog',AddBlog);
router.put('/editblog/:id',EditBlog);
router.post('/deleteblog/:id',DeleteBlog);
router.get('/:id',getBlogById);





module.exports = router