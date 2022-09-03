import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './currentWeather.css';

const CurrentWeather = () => {
  return (
    <Grid item container className="current-weather" margin={'4rem atuo'}>
      <Grid item container className="top-content">
        <Grid item>
          <Typography>Toronto, CA </Typography>
        </Grid>
        <Grid item>
          <Typography> Sunny</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Box component="img" alt="Weather" src="icons/01d.png" />
      </Grid>
    </Grid>
  );
};

export default CurrentWeather;
