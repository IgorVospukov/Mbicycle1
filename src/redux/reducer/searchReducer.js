import { WEATHER_AXIOS, WEATHER_FAILED } from '../../types/types';

const INITIAL_STATE = { data: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WEATHER_AXIOS:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};
