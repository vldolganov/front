export const addData = (token) => {
  localStorage.setItem('jwt', token);
};

const getData = localStorage.getItem('jwt');

export const removeData = () => {
  localStorage.removeItem('jwt');
};

export default getData;
