import React from 'react';

const WeatherComponent = ({weather, city}: any) => {
  const date = new Date().toLocaleDateString()

  return (
    <>
      <h1>{city}</h1>
      <h1>{date}</h1>
      <div>{weather.list[0].main.temp}</div>
      <div>
        {weather.list.map((item: any) => {
          if (new Date(item.dt_txt).getHours() === 12) {
            return <div key={item.dt}>
              {item.main.temp}
            </div>
          }
        })}
      </div></>
  );
};

export default WeatherComponent;
