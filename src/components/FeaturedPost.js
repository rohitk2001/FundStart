import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const styling = {
    margin: 'auto',
    width: '60%',
    padding: '30px 20px',
}

function FeaturedPost(props) {
  return (
    <Grid item xs={12} md={6} style={styling}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              Company Name
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Ask:
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Revenue:
            </Typography>
            <Typography variant="subtitle1" color="primary">
              <button>Invest</button>
            </Typography>
          </CardContent>
          <Typography variant="subtitle1" paragraph>
              Company description
            </Typography>
        </Card>
      </CardActionArea>
    </Grid>
  );
}



export default FeaturedPost;