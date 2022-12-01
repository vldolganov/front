import React from 'react';

import AuthPage from '../../pages/authPage/AuthPage';
import './Modal.css';

function Modal({ modalType: { modal, open }, modalClose }) {
  return (
    <div className={open ? 'modal active' : 'modal'} onClick={() => modalClose()}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <AuthPage modalType={modal} />
      </div>
    </div>
  );
}

export default Modal;
