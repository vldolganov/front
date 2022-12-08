import axios from 'axios';

const api = axios.create({ baseURL: process.env.REACT_APP_URL });

const authInterceptor = (config) => ({
  ...config,
  headers: { ...config.headers, Authorization: localStorage.getItem('jwt') },
});
api.interceptors.request.use(authInterceptor);

export default api;
