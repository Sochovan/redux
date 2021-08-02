export const weatherDataSelector = (state) => {
  console.log(state.weather.weatherData);
  return state.weather.weatherData;
};
