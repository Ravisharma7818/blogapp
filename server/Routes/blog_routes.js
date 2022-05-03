const { Router } = require('express');
const {getAllBlog ,AddBlog, EditBlog, DeleteBlog ,getBlogById,getByUserId} = require('../Controllers/blog_controller');

const router = require("express").Router();

router.get('/getblog',getAllBlog);
router.post('/addblog',AddBlog);
router.put('/editblog/:id',EditBlog);
router.delete('/deleteblog/:id',DeleteBlog);
router.get('/:id',getBlogById);
router.get('/user/:id',getByUserId);






module.exports = router