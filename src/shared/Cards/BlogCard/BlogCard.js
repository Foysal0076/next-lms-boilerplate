import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './BlogCard.module.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

const BlogCard = () => {
    return (
        <Paper elevation={0} className={styles.cardContainer}>
            <div className='image-container'>
                <Image
                    src='/assets/images/default-blog-image.jpg'
                    alt='Blog Image'
                    layout='fill'
                    objectFit='cover'
                    placeholder='blur'
                    blurDataURL='/assets/images/default-blog-image.jpg'
                    className={styles.image}
                />
            </div>
            <Grid container direction='column' justifyContent='space-between' className={styles.cardContentContainer}>
                <div>
                    <Grid item container xs={12}>
                        <Grid item xs={6} container alignItems='center'>
                            <PersonOutlineIcon />
                            <span>Bruce Watson</span>
                        </Grid>
                        <Grid item xs={6} container alignItems='center'>
                            <CalendarTodayIcon />
                            <span>Sep 23rd 21</span>
                        </Grid>
                    </Grid>
                    <Typography component='h3' variant=''>How to Become a Paralegal? A Beginners Guide</Typography>
                </div>
            </Grid>

        </Paper>
    )
}

export default BlogCard