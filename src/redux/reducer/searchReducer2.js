import { WEATHER_AXIOSFORSINGLECITY } from '../../types/types';

const INITIAL_STATE = { data2: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WEATHER_AXIOSFORSINGLECITY:
      return {
        ...state,
        data2: [...state.data2, action.payload],
      };
    default:
      return state;
  }
};
