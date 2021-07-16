import axios from 'axios';
import queryString from 'query-string';
import { BASE_URL } from '../constants/UserConstant';

export const axiosClient = axios.create({
  baseURL:BASE_URL,
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json',
    // 'Access-Control-Allow-Origin': 'http://localhost:3000',
    // 'Access-Control-Allow-Credentials': true,
  },
  paramsSerializer: params => {
    return queryString.stringify(params, {
      encode: false,
    });
  },
});

// axiosClient.interceptors.request.use(async config => {
//   const token = localStorage.getItem('tokens');
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    throw error;
  },
);