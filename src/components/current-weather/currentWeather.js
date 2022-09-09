const CurrentWeather = () => {
  return (
    <div className="content">
      <div className="content-top">
        <div className="content-top__info">
          <p className="content-top__info-city">Toronto, CA</p>
          <p className="content-top__info-description">Sunny</p>
        </div>

        <div className="content-top__icon-box">
          <img
            alt="weather"
            src="icons/01d.png"
            className="content-top__icon"
          />
        </div>
      </div>
      <div className="content-bottom">
        <p className="content-bottom__temperature">18°C</p>
        <div className="content-bottom__details">
          <div className="content-bottom__details-box">
            <span className="content-bottom__details-label">Feels Like</span>
            <span className="content-bottom__details-value">16°C</span>
          </div>
          <div className="content-bottom__details-box">
            <span className="content-bottom__details-label">Humidity</span>
            <span className="content-bottom__details-value">55%</span>
          </div>
          <div className="content-bottom__details-box">
            <span className="content-bottom__details-label">Wind</span>
            <span className="content-bottom__details-value">12km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
