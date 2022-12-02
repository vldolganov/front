import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import {
  Modal, Box, Dialog, DialogContent,
} from '@mui/material';
import Auth from '../auth/Auth';

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

  return (
    <div>
      <Dialog
        open={open}
        onClose={modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="dialog-dialog-description"
        fullWidth="true"
        disableEscapeKeyDown="false"
      >
        <DialogContent className={modalType}>
          <Box sx={style} className="box">
            <Auth
              modalType={modalType}
            />
          </Box>
        </DialogContent>

      </Dialog>
    </div>
  );
}

BasicModal.propTypes = {
  modalClose: PropTypes.func.isRequired,
};

export default BasicModal;
