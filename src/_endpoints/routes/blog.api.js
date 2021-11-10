import { AXIOS_API_URL } from "../config/config.axios"

export const fetchBlogs = ({ page = 1, count = 12, sortBy = 'date', order = 'desc' }) => AXIOS_API_URL.get(`/blogs?page=${page}&count=${count}&sort_by=${sortBy}&sort=${order}`)

export const fetchABlog = (blogSlug) => AXIOS_API_URL.get(`/blogs/${blogSlug}`)

export const postBlogComment = (comment) => {
    return AXIOS_API_URL.post(`/blogs/${blogId}/discussion`, comment, {
        headers: {
            'content-type': 'application/json'
        }
    })
}