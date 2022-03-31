import * as React from 'react';
import {Card,CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';


export default function ProductItem({ahmet}) {
  return (
    <Card style={{width:"200px"}}>
      <CardMedia
        component="img"
        alt="resim yok bekleme"
        image={ahmet.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {ahmet.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ahmet.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ahmet.category}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}