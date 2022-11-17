import api from './api';

const getNews = () => api.get(`${process.env.APP_URL}/api/news`);

export default getNews;
