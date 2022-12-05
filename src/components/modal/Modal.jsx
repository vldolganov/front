import React, { memo } from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import {
  Dialog,
  DialogContent,
} from '@mui/material';
import Auth from '../auth/Auth';

import './Modal.css';

function BasicModal({ modalClose }) {
  const { open, modalType } = useSelector((state) => state.auth);

  return (
    <Dialog
      open={open}
      onClose={modalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="dialog-dialog-description"
      fullWidth
    >
      <DialogContent className={modalType}>
        <Auth modalType={modalType} />
      </DialogContent>
    </Dialog>

  );
}

BasicModal.propTypes = {
  modalClose: PropTypes.func.isRequired,
};

export default memo(BasicModal);
