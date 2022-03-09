import axios from 'axios';
import { addWeatherSingleCities } from '../redux/actions';

export const getDataWeatherforSingleCity = (text) => {
  return (dispatch) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=98af36acdb7ad192933fdac17cefa8ec`
      )
      .then((response) => dispatch(addWeatherSingleCities(response.data)))
      .catch((error) => {
        console.error(error);
      });
  };
};
