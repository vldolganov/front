import React from 'react';
import { PropTypes } from 'prop-types';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { TextField } from '@mui/material';

import { authSignUpRequest, authSignInRequest } from '../../redux/actions/auth';
import { getSchemaForAuth } from '../../validation/authValidation';
import './Auth.css';

function Auth({
  array,
  textOnButton,
  condition,
}) {
  const dispatch = useDispatch();
  const validateSchema = getSchemaForAuth(condition);
  const isLoading = condition === 'SignUp';
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      login: '',
      password: '',
    },
    validateSchema,
    onSubmit: (values) => {
      if (condition) {
        dispatch(authSignUpRequest(values));
      } else {
        dispatch(authSignInRequest(values));
      }
    },
  });
  return (
    <div className="main">
      <form onSubmit={formik.handleSubmit} className="form">
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          hidden={isLoading}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          hidden={isLoading}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="login"
          name="login"
          label="Login"
          hidden={isLoading}
          value={formik.values.login}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="password"
          hidden={isLoading}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <button type="submit">{textOnButton}</button>
      </form>
    </div>
  );
}

Auth.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  textOnButton: PropTypes.string.isRequired,
  condition: PropTypes.bool.isRequired,
};

export default Auth;
