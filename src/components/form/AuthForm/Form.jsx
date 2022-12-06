import React from 'react';
import { PropTypes } from 'prop-types';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { TextField } from '@mui/material';
import getSchemaForAuth from '../../../validation/authValidation';
import { authSignUpRequest, authSignInRequest } from '../../../redux/actions/auth';
import { signInType, signUpType } from '../../../constants/modalType';
import { modalClose } from '../../../redux/actions/modal';

import './Form.css';

function Form({
  modalType,
}) {
  const dispatch = useDispatch();
  const arrayType = modalType === 'signUp' ? signUpType : signInType;
  const validationSchema = getSchemaForAuth(modalType);
  const closeModalWindow = () => {
    dispatch(modalClose());
  };
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
      closeModalWindow();
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

Form.propTypes = {
  modalType: PropTypes.string,
};

Form.defaultProps = {
  modalType: '',
};

export default Form;
