import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Auth from '../auth/Auth';

import { signInType, signUpType } from '../../constants/authType';

import './Modal.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BasicModal({ modalClose }) {
  const { open, modalType } = useSelector((state) => state.auth);
  const path = modalType === 'signUp';
  const array = path ? signUpType : signInType;
  const textOnButton = path ? 'signUp' : 'signIn';

  return (
    <div>
      <Modal
        open={open}
        onClose={modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Auth
            array={array}
            textOnButton={textOnButton}
            condition={path}
          />
        </Box>
      </Modal>
    </div>
  );
}

BasicModal.propTypes = {
  modalClose: PropTypes.func.isRequired,
};

export default BasicModal;
