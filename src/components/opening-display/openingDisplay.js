const OpeningDisplay = () => {
  return (
    <div className="opening">
      <div className="opening__content-container">
        <img
          alt="weather-icon"
          className="opening__weather-icon"
          src={'icons/weatherIcon.png'}
        />
        <h1>Search Your Local Forecast</h1>
      </div>
    </div>
  );
};

export default OpeningDisplay;
