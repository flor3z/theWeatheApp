const OpeningDisplay = () => {
  return (
    <div className="opening fade-in-bottom">
      <div className="opening__image-container">
        <img
          alt="weather-icon"
          className="opening__weather-icon"
          src={'icons/weatherIcon.png'}
        />
      </div>

      <div className="opening__title-container">
        <span className="opening__title-container__word-odd">Search</span>
        <span className="opening__title-container__word-even">Your</span>
        <span className="opening__title-container__word-odd">Local</span>
        <span className="opening__title-container__word-even">Forecast</span>
      </div>
    </div>
  );
};

export default OpeningDisplay;
