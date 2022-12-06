import api from './api';

const getUser = (id) => api.get(`/api/user/${id}`);

export default getUser;
