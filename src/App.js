import React, { useState } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';

function App() {
  // const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.70011&lon=-79.4163&appid=8f04bd3cf5e9e3a13c6c3ec1a326036a';

  return (
    <div className="App">
      <Container maxWidth="lg" style={{ backgroundColor: '#bbb' }}>
        <div className="upper">
          <div className="upper__location">
            <p>Toronto</p>
          </div>
          <div className="upper__temp">
            <h1>30° C</h1>
          </div>
          <div className="upper__description">Clear Skies and Sunny</div>
        </div>
        <div className="lower">
          <div className="lower__feelslike"> Feels like 34° C</div>
          <div className="lower__wind">18 km/h</div>
          <div className="lower__humidity">42%</div>
        </div>
      </Container>
    </div>
  );
}

export default App;

//const API_KEY_ = 8f04bd3cf5e9e3a13c6c3ec1a326036a // api key
