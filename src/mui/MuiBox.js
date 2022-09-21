import React from "react";
import { Box } from "@mui/material";
const MuiBox = () => {
  return (
    <>
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
    </>
  );
};

export default MuiBox;
