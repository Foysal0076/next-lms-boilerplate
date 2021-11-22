import { Grid } from '@mui/material'
import React from 'react'
import BlogCard from '../../../../shared/Cards/BlogCard/BlogCard'

const AllBlogs = () => {

    return (
        <div>
            All Blogs
            <Grid container>
                <Grid item xs={12} md={6} lg={4}>
                    <BlogCard />
                </Grid>
            </Grid>
        </div>
    )
}

export default AllBlogs