import React, {useCallback} from 'react';
import {useFetchWeather} from "../hooks/weather/useFetchWeather";
import SearchCityComponent from "../components/SearchCityComponent";
import WeatherComponent from "../components/WeatherComponent";
import {useSearchParams} from "react-router-dom";

const WeatherContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {data: weather, isLoading} = useFetchWeather(searchParams.get('q') ? searchParams.get('q') : 'Kiev')

  const saveSearch = useCallback((value: string) => {
    setSearchParams({q: value})
  }, [setSearchParams])

  if (isLoading) {
    return <div>Data is loading...</div>
  }

  return (
    <>
      <SearchCityComponent saveSearch={saveSearch}/>
      <WeatherComponent weather={weather} city={searchParams.get('q') ? searchParams.get('q') : 'Kiev'}/>
    </>
  );
};

export default WeatherContainer;
