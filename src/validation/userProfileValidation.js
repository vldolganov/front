import * as Yup from 'yup';

const login = Yup
  .string('Enter your password')
  .min(4, 'Login should be of minimum 4 characters length')
  .max(50, 'Login is too long')
  .required('Login is required');

const email = Yup
  .string('Enter your email')
  .email('Enter a valid email')
  .required('Email is required');

const name = Yup
  .string('Enter you name')
  .min(1, 'Name should be minimum 1')
  .required('Name is required');

const title = Yup
  .string('Enter Title')
  .min(5, 'Title is too short')
  .required('Title is required');

const content = Yup
  .string('Enter tag')
  .min(1, 'Content is too short')
  .max(70, 'Content is too long');

const tags = Yup
  .string('Enter tag')
  .min(1, 'Tag is too short')
  .max(10, 'Tag is too long');

const addNewsSchema = {
  title,
  content,
  tags,
};

const editProfileSchema = {
  email,
  login,
  name,
};

const getSchemaForUserPage = (modalType) => Yup.object(modalType === 'add' ? addNewsSchema : editProfileSchema);

export default getSchemaForUserPage;
