const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const URL = 'https://api.openweathermap.org/geo/1.0/direct';
export const coordinates = (location) => `${URL}?q=${location}&limit=1&appid=${API_KEY}`;
