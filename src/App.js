import './scss/style.scss';

import Search from './components/search/search';
import CurrentWeather from './components/current-weather/currentWeather';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <div className="container__search">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div className="container__weather">
        <CurrentWeather />
      </div>
    </div>
  );
}

export default App;

//const API_KEY_ = 8f04bd3cf5e9e3a13c6c3ec1a326036a // api key
