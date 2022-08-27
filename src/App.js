import React, { useState } from 'react';
import axios from 'axios';
// import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import Image from './images/background.jpg';

function App() {
  // const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.70011&lon=-79.4163&appid=8f04bd3cf5e9e3a13c6c3ec1a326036a';

  return (
    <Paper>
      <AppBar color="primary" position="static" style={{ height: '5rem' }}>
        <Toolbar>
          <Typography color="inherit">The Weather App</Typography>
        </Toolbar>
      </AppBar>
      <Grid
        className="upper-container"
        // marginTop={'4rem'}
        justifyContent="center"
        alignItems="center"
        direction="column"
        container
        // background={Image}
      >
        <Grid item marginTop="2rem" className="upper">
          <Grid item className="upper__location">
            <p>Toronto</p>
          </Grid>
          <Grid item className="upper__temp">
            <h1>30° C</h1>
          </Grid>
          <Grid item className="upper__description">
            <p>Clear Skies and Sunny</p>
          </Grid>
        </Grid>
        <Grid
          container
          marginTop="15rem"
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          className="lower-container"
        >
          <Grid
            item
            className="lower__feelslike"
            border={'1px solid white'}
            borderRadius="5px"
            padding="1rem 2rem"
            margin={'0.5rem 1rem'}
            bgcolor="rgba(0,0,0,0.6)"
          >
            <p>Feels like 34° C</p>
          </Grid>
          <Grid
            item
            className="lower__wind"
            border={'1px solid white'}
            borderRadius="5px"
            padding="1rem 2rem"
            margin={'0.5rem 1rem'}
            bgcolor="rgba(0,0,0,0.6)"
          >
            <p>18 km/h</p>
          </Grid>
          <Grid
            item
            className="lower__humidity"
            border={'1px solid white'}
            borderRadius="5px"
            padding="1rem 2rem"
            margin={'0.5rem 1rem'}
            bgcolor="rgba(0,0,0,0.6)"
          >
            <p>42% Humidity</p>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default App;

//const API_KEY_ = 8f04bd3cf5e9e3a13c6c3ec1a326036a // api key
