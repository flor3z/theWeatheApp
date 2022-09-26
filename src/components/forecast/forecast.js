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
                  <div className="daily-weather">
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
                        ? `${Math.round(item.main.temp_min)}°C / ${Math.round(
                            item.main.temp_max
                          )}°C`
                        : `${Math.round(item.main.temp_min)}°F / ${Math.round(
                            item.main.temp_max
                          )}°F`}
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel></AccordionItemPanel>
            </AccordionItem>
          )
        )}
      </Accordion>
    </div>
  );
};

export default Forecast;
