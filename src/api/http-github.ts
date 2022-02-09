import axios, { AxiosInstance } from 'axios';
import rateLimit from 'axios-rate-limit';

const apiClient: AxiosInstance = rateLimit(
  axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      'Content-type': 'application/json',
    },
  }),
  { maxRequests: 10, perMilliseconds: 60000, maxRPS: 1 }
);
export default apiClient;
