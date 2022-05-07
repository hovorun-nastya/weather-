import {useQuery} from "react-query";
import { weatherAPI } from "../../api";


export const useFetchWeather = (city: any) => {
  return useQuery([city], async () => {
    const { lat, lon } = await weatherAPI.fetchCoordinate(city)
      .then((res: any) => res.data[0])
    return await weatherAPI.fetchWeather(lat, lon)
      .then((arr: any) => arr.data)
  })

}
