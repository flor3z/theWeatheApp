// import React, { useState } from 'react';

import Search from './components/search/search';
import Paper from '@mui/material/Paper';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CurrentWeather from './components/current-weather/currentWeather';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <Paper>
      <Grid container className="container">
        <Grid item width={'inherit'}>
          <Search onSearchChange={handleOnSearchChange} />
        </Grid>
      </Grid>
      <CurrentWeather />
    </Paper>
  );
}

export default App;

//const API_KEY_ = 8f04bd3cf5e9e3a13c6c3ec1a326036a // api key
