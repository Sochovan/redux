import { WEATHER_DATA_RECIEVED } from "./weather.actions";

const initialData = {
  weatherData: [],
};

export const weatherReducer = (state = initialData, action) => {
  switch (action.type) {
    case WEATHER_DATA_RECIEVED: {
      return {
        ...state,
        weatherData: action.payload.weatherData,
      };
    }
    default:
      return state;
  }
};
