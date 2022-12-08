import * as Yup from 'yup';

const password = Yup
  .string('Enter your password')
  .min(3, 'Password should be of minimum 3 characters length')
  .required('Password is required');

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

const SignUpSchema = {
  name,
  email,
  login,
  password,
};

const SignInSchema = {
  login,
  password,
};

const getSchemaForAuth = (modalType) => Yup.object(modalType === 'signIn' ? SignInSchema : SignUpSchema);

export default getSchemaForAuth;
