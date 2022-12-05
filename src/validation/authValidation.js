import * as Yup from 'yup';

const password = Yup
  .string('Enter your password')
  .min(4, 'Password should be of minimum 4 characters length')
  .required('Password is required');

const login = Yup
  .string('Enter your login')
  .min(3, 'Login should be of minimum 3 characters length')
  .required('Login is required');

const SignUpSchema = {
  name: Yup
    .string('Enter you name')
    .min(1, 'Name should be minimum 1')
    .required('Name is required'),
  email: Yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  login,
  password,
};

const SignInSchema = {
  login,
  password,
};

const getSchemaForAuth = (modalType) => Yup.object(modalType === 'signIn' ? SignInSchema : SignUpSchema);

export default getSchemaForAuth;
