import axios from 'axios';
import { addWeatherCities } from '../redux/actions';

let endpoints = [
  'https:api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&units=metric&appid=98af36acdb7ad192933fdac17cefa8ec',
  'https:api.openweathermap.org/data/2.5/onecall?lat=45&lon=-75&exclude=hourly,daily&units=metric&appid=98af36acdb7ad192933fdac17cefa8ec',
  'https:api.openweathermap.org/data/2.5/onecall?lat=45&lon=-110&exclude=hourly,daily&units=metric&appid=98af36acdb7ad192933fdac17cefa8ec',
  'https:api.openweathermap.org/data/2.5/onecall?lat=35&lon=95.04&exclude=hourly,daily&units=metric&appid=98af36acdb7ad192933fdac17cefa8ec',
  'https:api.openweathermap.org/data/2.5/onecall?lat=55&lon=-5&exclude=hourly,daily&units=metric&appid=98af36acdb7ad192933fdac17cefa8ec',
  'https:api.openweathermap.org/data/2.5/onecall?lat=-30&lon=-50&exclude=hourly,daily&units=metric&appid=98af36acdb7ad192933fdac17cefa8ec',
  'https:api.openweathermap.org/data/2.5/onecall?lat=15&lon=-60&exclude=hourly,daily&units=metric&appid=98af36acdb7ad192933fdac17cefa8ec',
  'https:api.openweathermap.org/data/2.5/onecall?lat=40&lon=-95&exclude=hourly,daily&units=metric&appid=98af36acdb7ad192933fdac17cefa8ec',
  'https:api.openweathermap.org/data/2.5/onecall?lat=5&lon=30&exclude=hourly,daily&units=metric&appid=98af36acdb7ad192933fdac17cefa8ec',
  'https:api.openweathermap.org/data/2.5/onecall?lat=35&lon=15&exclude=hourly,daily&units=metric&appid=98af36acdb7ad192933fdac17cefa8ec',
];

export const getDataWeather = () => {
  return (dispatch) => {
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((response) => dispatch(addWeatherCities(response)))
      .catch((error) => {
        console.error(error);
      });
  };
};
