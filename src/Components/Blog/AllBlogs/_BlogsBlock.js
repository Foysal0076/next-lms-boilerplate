import React from 'react'
import BlogsPageBanner from './BlogsPageBanner/BlogsPageBanner'
import AllBlogs from './Blogs/AllBlogs'

const BlogsBlock = () => {
    return (
        <>
            {/* Sub Components will go here */}
            {/* Page Banner */}
            <BlogsPageBanner />
            {/* Blogs */}
            <AllBlogs />
        </>
    )
}

export default BlogsBlock