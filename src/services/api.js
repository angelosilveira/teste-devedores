import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

const apiDev = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL_DEV,
});

export { api, apiDev };
