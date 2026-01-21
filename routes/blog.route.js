const express = require('express');
const {getBlogs, getBlogById, createBlog, updateBlogById, deleteBlogById} = require('../controllers/blog.controller.js')
const { verifyAuth } = require('../middleware/auth.middleware.js');
const router = express.Router();

router.get('/', getBlogs);
router.get('/:id', getBlogById);

router.post('/', verifyAuth, createBlog);
router.put('/:id', verifyAuth, updateBlogById);
router.delete('/:id', verifyAuth, deleteBlogById);

module.exports = router;