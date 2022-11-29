import React from 'react';
import { PropTypes } from 'prop-types';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { authSignUpRequest, authSignInRequest } from '../../redux/actions/auth';
import './Auth.css';

function Auth({ array, textOnButton, condition }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      login: '',
      password: '',
    },
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
        {array.map((elem) => (
          <label htmlFor="name">
            {elem}
            <input
              id={elem}
              name={elem}
              type={elem}
              onChange={formik.handleChange}
              value={formik.values[elem]}
            />
          </label>
        ))}
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
