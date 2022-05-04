import React, {useEffect, useState} from 'react';
import {useFetchWeather} from "../hooks/weather/useFetchWeather";
import SearchCityComponent from "../components/SearchCityComponent";
import WeatherComponent from "../components/WeatherComponent";

const WeatherContainer = () => {
  const [city, setCity] = useState('Kiev')
  const {data: weather, isLoading, refetch} = useFetchWeather(city)

  useEffect(() => {
    refetch()
  }, [city])

  if (isLoading) {
    return <div>Data is loading...</div>
  }

  return (
    <>
      <SearchCityComponent setCity={setCity}/>
      <WeatherComponent weather={weather} city={city}/>
    </>
  );
};

export default WeatherContainer;
