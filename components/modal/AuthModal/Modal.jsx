import React, { memo } from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import {
  Dialog,
  DialogContent,
} from '@mui/material';
import Form from '../../form/AuthForm/Form';

import './Modal.css';

function BasicModal({ modalClose }) {
  const { open, modalType } = useSelector((state) => state.modal);

  return (
    <div>
      <Dialog
        open={open}
        onClose={modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="dialog-dialog-description"
        fullWidth
      >
        <DialogContent className={modalType}>
          <Form
            modalType={modalType}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

BasicModal.propTypes = {
  modalClose: PropTypes.func.isRequired,
};

export default memo(BasicModal);
