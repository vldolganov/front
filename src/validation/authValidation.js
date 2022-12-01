import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Name is too short')
    .max(40, 'Name is too Long!')
    .required('Required'),
  login: Yup.string()
    .min(2, 'Login is too Short!')
    .max(20, 'Login is too long')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Password is too short')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const SignInSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, 'Login is too Short!')
    .max(20, 'Login is too long')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Password is too short')
    .required('Required'),
});

export { SignInSchema, SignUpSchema };

