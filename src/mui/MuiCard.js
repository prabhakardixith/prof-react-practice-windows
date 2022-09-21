import React from "react";
import {
  CardMedia,
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
const MuiCard = () => {
  return (
    <Box width="620px" sx={{
      display:'grid',
      gridTemplateColumns:'1fr 1fr',
      rowGap:'10px',
      columnGap:'10px'
    }}>

      <Card elevation={2} >
        <CardMedia component='img' height='170' alt='unsplashed image' image='https://source.unsplash.com/random'/>
        <CardContent p={1} sx={{
          height:'100px'
        }}>
          <Typography gutterBottom variant="h5" component="div">
            Flex
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The flex property sets the flexible length on flexible items. Note:
            If the element is not a flexible item, the flex property has no
            effect
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card elevation={2}>
        <CardMedia component='img' height='170' alt='unsplashed image' image='https://source.unsplash.com/random'/>
        <CardContent p={1} sx={{
          height:'100px'
        }}>
          <Typography gutterBottom variant="h5" component="div">
            Flex
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The flex property sets the flexible length on flexible items. Note:
            If the element is not a flexible item, the flex property has no
            effect
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card elevation={2} >
        <CardMedia component='img' height='170' alt='unsplashed image' image='https://source.unsplash.com/random'/>
        <CardContent p={1} sx={{
          height:'100px'
        }}>
          <Typography gutterBottom variant="h5" component="div">
            Flex
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The flex property sets the flexible length on flexible items. Note:
            If the element is not a flexible item, the flex property has no
            effect
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card elevation={2}>
        <CardMedia component='img' height='170' alt='unsplashed image' image='https://source.unsplash.com/random'/>
        <CardContent p={1} sx={{
          height:'100px'
        }}>
          <Typography gutterBottom variant="h5" component="div">
            Flex
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The flex property sets the flexible length on flexible items. Note:
            If the element is not a flexible item, the flex property has no
            effect
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
