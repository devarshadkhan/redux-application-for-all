import { Box, Container, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import "../../stylessheet/Counter.css"
const Counter = () => {
  return (
    <>
       <Box className='counter_sec' component={"section"}>
        <Container>
            <Grid container >
                <Grid item lg={12} className='col-c'>
                   <Box className='content' component={"div"}>
                   <div>
                   <h1>Count : 0</h1>
                        
                        <Button variant="contained" color="primary">
                          Increment
                        </Button>
                        <Button variant="contained" color="primary">
                          Decrement
                        </Button>
                   </div>
                        
                   </Box>
                </Grid>
            </Grid>
        </Container>
       </Box> 
    </>
  )
}

export default Counter