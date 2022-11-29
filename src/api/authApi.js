import api from './api';

export const AuthSignIn = (payload) => api.post('/api/auth/signin', payload);
export const AuthSignUp = (payload) => api.post('/api/auth/signup', payload);
export const AuthCheckToken = () => api.get('/api/auth');
