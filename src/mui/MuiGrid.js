import React from 'react'
import {Box,Stack,Grid} from '@mui/material'
const MuiGrid = () => {
  return (
    <>
    <Grid container my={4}  rowSpacing={4} columnSpacing={2}>
        <Grid item xs={6} >
        <Box  bgcolor='primary.main' p={2} >Item 1</Box>
        </Grid>
        <Grid item xs={6} >
        <Box bgcolor='secondary.main' p={2}>Item 2</Box>
        </Grid>
        <Grid item xs={6} >
        <Box bgcolor='success.main'p={2}>Item 3</Box>
        </Grid>
        <Grid item xs={6} >
        <Box bgcolor='warning.main'p={2}>Item 4</Box>

        </Grid>
    </Grid>
    </>
    
  )
}

export default MuiGrid