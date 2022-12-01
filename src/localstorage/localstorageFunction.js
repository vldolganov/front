export const addData = (token) => {
  localStorage.setItem('jwt', token);
};

export const getData = () => localStorage.getItem('jwt');

export const removeData = () => {
  localStorage.removeItem('jwt');
};
