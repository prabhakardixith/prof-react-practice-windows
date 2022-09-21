import React from 'react'
import { Box, Divider, Stack } from '@mui/material'
const MuiStack = () => {
  return (
    <Stack direction='row' spacing={2}
     divider={<Divider orientation='vertical' flexItem/>} sx={{
            border:'1px solid'
        }
    }>
    <Box
        p={2}
        bgcolor="success.light"
        display="flex"
        height="100px"
        width="100px"
        sx={{}}
      ></Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100px",
          height: "100px",
          color: "white",
          padding: "16px",
          "&:hover": {
            backgroundColor: "secondary.light",
          },
        }}
      >
        MuiBox
      </Box>
    </Stack>
  )
}

export default MuiStack