import { WEATHER_AXIOS, WEATHER_AXIOSFORSINGLECITY } from '../../types/types';

export const addWeatherCities = (payload) => ({
  type: WEATHER_AXIOS,
  payload,
});

export const addWeatherSingleCities = (payload) => ({
  type: WEATHER_AXIOSFORSINGLECITY,
  payload,
});
