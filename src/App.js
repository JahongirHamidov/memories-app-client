import React,{useEffect,useState} from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import {useDispatch} from 'react-redux'

import {getPosts} from './actions/posts'
import memories from './assets/memories.png'
import {Form} from './components/Form/Form'
import {Posts} from './components/Posts/Posts'
import {useAppStyles} from './useAppStyles'

function App() {

  const classes = useAppStyles()
  const dispatch = useDispatch()
  const [currentId,setCurrentId] = useState(null)

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId , dispatch])

  return (
    <Container maxwidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
        <img className={classes.image} src={memories} alt='memories' height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer}  alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7} >
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
