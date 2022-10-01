const CurrentWeather = ({ data, isMetric }) => {
  return (
    <div className="content">
      <div className="content-top">
        <div className="content-top__info">
          <p className="content-top__info-city">{data.city}</p>
          <p className="content-top__info-description">
            {data.weather[0].description}
          </p>
        </div>

        <div className="content-top__icon-box">
          <img
            alt="weather"
            src={`icons/${data.weather[0].icon}.png`}
            className="content-top__icon"
          />
        </div>
      </div>
      <div className="content-bottom">
        <p className="content-bottom__temperature">
          {isMetric
            ? `${Math.round(data.main.temp - 273.15)}°C`
            : `${Math.round((data.main.temp - 273.15) * 1.8 + 32)}°F`}
        </p>
        <div className="content-bottom__details">
          <div className="content-bottom__details-box">
            <span className="content-bottom__details-label">Feels Like</span>
            <span className="content-bottom__details-value">
              {isMetric
                ? `${Math.round(data.main.feels_like - 273.15)}°C`
                : `${Math.round(
                    (data.main.feels_like - 273.15) * 1.8 + 32
                  )}°F `}
            </span>
          </div>
          <div className="content-bottom__details-box">
            <span className="content-bottom__details-label">Humidity</span>
            <span className="content-bottom__details-value">
              {data.main.humidity}%
            </span>
          </div>
          <div className="content-bottom__details-box">
            <span className="content-bottom__details-label">Wind</span>
            <span className="content-bottom__details-value">
              {isMetric
                ? `${Math.round(data.wind.speed * 3.6)} kmh`
                : `${Math.round(data.wind.speed * 2.237)} mph`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
