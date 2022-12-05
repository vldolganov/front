import React from 'react';
import { PropTypes } from 'prop-types';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { TextField } from '@mui/material';

import { authSignUpRequest, authSignInRequest } from '../../redux/actions/auth';
import getSchemaForAuth from '../../validation/authValidation';
import './Auth.css';
import { signInType, signUpType } from '../../constants/authType';

function Auth({
  modalType,
}) {
  const dispatch = useDispatch();
  const arrayType = modalType === 'signUp' ? signUpType : signInType;
  const validationSchema = getSchemaForAuth(modalType);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      login: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      if (modalType === 'signUp') {
        dispatch(authSignUpRequest(values));
      } else if (modalType === 'signIn') {
        dispatch(authSignInRequest(values));
      }
    },
  });
  return (
    <div className="main">
      <form onSubmit={formik.handleSubmit} className="form">
        {arrayType.map((elem) => (
          <TextField
            fullWidth
            id={elem}
            name={elem}
            label={elem}
            type={elem}
            key={elem}
            value={formik.values[elem]}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched[elem] && Boolean(formik.errors[elem])}
            helperText={formik.touched[elem] && formik.errors[elem]}

          />
        ))}

        <button type="submit">{modalType}</button>
      </form>
    </div>
  );
}

Auth.propTypes = {
  modalType: PropTypes.string.isRequired,
};

export default Auth;
