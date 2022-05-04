import React, {useState,useCallback} from 'react';
import {useQuery} from "react-query";
import {weatherAPI} from "../api";
import {useFetchWeather} from "../hooks/weather/useFetchWeather";

const SearchCity = () => {
  const [city, setCity] = useState('Kiev')
  const [value, setValue] = useState('')
  const {data: weather, isLoading, refetch} = useFetchWeather(city);

  if (isLoading) {
    return <div>Data is loading...</div>
  }
  const onClick = async () => {
    setCity(value)
    await refetch()
  }

  const date = new Date().toLocaleDateString()

  return (
    <>
      <input
        value={value}
        id="city"
        placeholder={"Введіть місто"}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onClick}>
        Show
      </button>
      <div> {city}</div>
      <h1> {date}</h1>
      <div> {weather.list[0].main.temp}</div>
      <div>
        {weather.list.map((item: any) => {
          if (new Date(item.dt_txt).getHours() === 12) {
            return <div key={item.dt}>
              {item.main.temp}
            </div>
          }
        })}
      </div>

    </>
  );
};

export default SearchCity;