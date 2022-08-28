import React, { useState } from 'react';
import axios from 'axios';
// import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import Image from './images/background.jpg';

function App() {
  const [data, setData] = useState({});
  const [position, setPosition] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${position}&appid=8f04bd3cf5e9e3a13c6c3ec1a326036a`;

  const searchPosition = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <Paper>
      <AppBar
        className="header"
        color="primary"
        position="static"
        style={{ height: '7rem' }}
      >
        <Toolbar>
          <Typography color="inherit" fontSize={'2rem'}>
            The Weather App
          </Typography>
          <TextField
            value={position}
            onKeyPress={searchPosition}
            onChange={(event) => setPosition(event.target.value)}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
        </Toolbar>
      </AppBar>
      <Grid
        className="upper-container"
        paddingTop={'4rem'}
        justifyContent="center"
        alignItems="center"
        direction="column"
        container
        // background={Image}
      >
        {/* <Grid item marginTop="2rem" className="upper"> */}
        <Grid item className="upper__location">
          <p>Toronto</p>
        </Grid>
        <Grid item className="upper__temp">
          <h1>30° C</h1>
        </Grid>
        <Grid item className="upper__description">
          <p>Clear Skies and Sunny</p>
        </Grid>
        {/* </Grid> */}
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
