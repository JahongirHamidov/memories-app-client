import React from 'react'
import {usePostsStyles} from './styles'
import {Post} from './Post/Post'
import {useSelector} from 'react-redux'
import {Grid, CircularProgress} from '@material-ui/core'

export function Posts({setCurrentId}) {
    const classes = usePostsStyles()
    const posts = useSelector((state) => state.posts )
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} xs={12} sm={6} item>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}
