import api from './api';

const addNews = (payload) => api.post('/api/news/', payload);

export default addNews;
