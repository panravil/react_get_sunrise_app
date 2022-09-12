const URL = 'https://api.sunrise-sunset.org/json';

export const getSunriseInfo = (lat, lon, date) => `${URL}?lat=${lat}&lng=${lon}&date=${date}`;
