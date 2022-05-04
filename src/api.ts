import axios from 'axios'

export const weatherAPI = {
  fetchCoordinate (city: string) {
    return axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=7afabd7ce0a60f1eae427947e17533c7`);
  },
  fetchWeather(lat: number,lon: number) {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7afabd7ce0a60f1eae427947e17533c7&units=metric`)
  }
}
