import {useState,React} from 'react'
import { Stack,Rating } from '@mui/material'
const MuiRating = () => {
    const[val,setVal]= useState(3.5);
    console.log({value : val});
  return (
    <Stack spacing={2}>
    <Rating value={val} precision={0.5} onChange={(e)=> setVal(parseInt(e.target.value))}/>
    </Stack>
  )
}

export default MuiRating