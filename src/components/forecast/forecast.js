import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
const DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const Forecast = ({ data, isMetric }) => {
  //Get the current day in number format//
  const currentDay = new Date().getDay();
  //Select the days after the current day from orinial DAYS array //
  const daysRemaining = DAYS.slice(currentDay, DAYS.length);
  //combine both days the remian and the week that follows//
  const totalCombinedDays = daysRemaining.concat(DAYS.slice(0, currentDay));

  console.log(totalCombinedDays);

  return (
    <div>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map(
          (
            item,
            index //Parens instead of curly brackets? perhaps return only 1 child instead of multiple on same lvl//
          ) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-weather fade-in">
                    <img
                      alt="weather"
                      className="daily-weather__icon"
                      src={`icons/${item.weather[0].icon}.png`}
                    />
                    <label className="daily-weather__day">
                      {totalCombinedDays[index]}
                    </label>
                    <label className="daily-weather__description">
                      {item.weather[0].description}
                    </label>
                    <label className="daily-weather__min-max">
                      {isMetric
                        ? `${Math.round(
                            item.main.temp_min - 273.15
                          )}°C / ${Math.round(item.main.temp_max - 273.15)}°C`
                        : `${Math.round(
                            (item.main.temp_min - 273.15) * 1.8 + 32
                          )}°F / ${Math.round(
                            (item.main.temp_max - 273.15) * 1.8 + 32
                          )}°F`}
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-container">
                  <div className="daily-details-container__item">
                    <label>Feels Like</label>
                    <label>
                      {isMetric
                        ? `${Math.round(item.main.feels_like - 273.15)}°C`
                        : `${Math.round(
                            (item.main.feels_like - 273.15) * 1.8 + 32
                          )}°F`}
                    </label>
                  </div>
                  <div className="daily-details-container__item">
                    <label>Humidity</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className="daily-details-container__item">
                    <label>Clouds</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className="daily-details-container__item">
                    <label>Wind Speed</label>
                    <label>
                      {isMetric
                        ? ` ${Math.round(item.wind.speed * 3.6)} kmh`
                        : ` ${Math.round(item.wind.speed * 2.237)} mph`}
                    </label>
                  </div>
                  <div className="daily-details-container__item">
                    <label>Sea Level</label>
                    <label>{item.main.sea_level} m</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          )
        )}
      </Accordion>
    </div>
  );
};

export default Forecast;
