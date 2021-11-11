import React from 'react'
import BlogBlock from '../../Components/Blog/SingleBlog/_BlogBlock'
import * as api from '../../_endpoints/routes/blog.api'

const BlogPage = ({ blog }) => {
    return (
        <>
            <BlogBlock blog={blog} />
        </>
    )
}

export default BlogPage

export const getStaticPaths = async () => {
    try {
        //Call external api endpoint to get blogs
        const { data: { data: blogs } } = await api.fetchBlogs('/blogs')
        const paths = blogs.map(blog => ({ params: { blogSlug: blog.slug } }))

        return {
            paths,
            fallback: true //Will build pages with new slug value
        }
    } catch (error) {
        return {
            paths: [{}],
            fallback: true
        }
    }
}

export const getStaticProps = async (context) => {
    try {
        const { blogSlug } = context.params
        const { data: { data: blog } } = await api.fetchABlog(blogSlug)

        return {
            props: {
                blog
            },
            revalidate: 60 * 60 * 6, //Revalidate in 4 hours
        }
    } catch (error) {
        return {
            props: {
                blog: {},
            },
            revalidate: 60 * 60 * 6, //Revalidate in 4 hours
        }
    }
}
