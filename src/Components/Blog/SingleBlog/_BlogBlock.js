import React from 'react'
import Blog from './Blog/Blog'
import SingleBlogPageBanner from './SingleBlogPageBanner/SingleBlogPageBanner'

const BlogBlock = () => {
    return (
        <div>
            {/* Sub Components will go here */}
            {/* Page Banner */}
            <SingleBlogPageBanner />
            {/* Blog Content */}
            <Blog />
        </div>
    )
}

export default BlogBlock