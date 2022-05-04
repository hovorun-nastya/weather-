import {useQuery} from "react-query";
import {weatherAPI} from "../../api";


export const useFetchWeather = (city: string) => {
    return useQuery('weather', async () => {
       const {lat, lon} = await weatherAPI.fetchCoordinate(city)
           .then(res => res.data[0])
        return await weatherAPI.fetchWeather(lat, lon)
           .then(arr => arr.data)
    })

}
