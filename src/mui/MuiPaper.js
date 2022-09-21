import React from "react";
import { Paper, Stack, Box, Divider,Grid } from "@mui/material";
const MuiPaper = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Stack
        direction="row"
        spacing={2}
        sx={{ border: "1px solid" }}
        divider={<Divider orientation="vertical" flexItem />}
      >
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
    </Paper>
  );
};

export default MuiPaper;
