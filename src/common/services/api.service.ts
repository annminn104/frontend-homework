import axios from 'axios';
import { EContentType } from '../enums';

const baseURL = 'http://localhost:5050';

export const apiService = axios.create({
  baseURL,
  headers: {
    'Content-Type': EContentType.json
  },
  withCredentials: true
});

apiService.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
