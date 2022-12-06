import React from 'react';
import { PropTypes } from 'prop-types';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { TextField } from '@mui/material';

import { addNewsRequest } from '../../../redux/actions/news';
// import { getSchemaForUserPage } from '../../../validation/authValidation';
import { addNewsType, editProfileType } from '../../../constants/modalType';
import { modalClose } from '../../../redux/actions/modal';

import './UserForm.css';

function UserForm({
  modalType,
}) {
  const dispatch = useDispatch();
  const arrayType = modalType === 'add' ? addNewsType : editProfileType;
  // const validationSchema = getSchemaForUserPage(modalType);
  const closeModalWindow = () => {
    dispatch(modalClose());
  };
  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      tags: '',
    },
    // validationSchema,
    onSubmit: (values) => {
      if (modalType === 'add') {
        dispatch(addNewsRequest(values));
      } else if (modalType === 'edit') {
        console.log('edit will be soon');
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

UserForm.propTypes = {
  modalType: PropTypes.string.isRequired,
};

export default UserForm;
