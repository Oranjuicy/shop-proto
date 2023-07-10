import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Namecard(props) {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.artistName}
        </Typography>
        <Typography variant="h5" component="div">
          {props.artworkName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.description}
        </Typography>
        <Typography variant="body2">
          {props.price}
        </Typography>
      </CardContent>
    </Card>
  );
}
