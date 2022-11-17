import api from './api';

const getNews = () => api.get(`/api/news`);

export default getNews;
