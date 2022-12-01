import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Modal from '../modal/Modal';

import { authLogOut } from '../../redux/actions/auth';
import './Header.css';

function Header() {
  const { user, isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [modalType, setModalType] = useState({ modal: '', open: false });

  const openModal = (type) => {
    setModalType({ modalType: type, open: true });
  };

  const closeModal = () => {
    setModalType({ ...modalType, open: false });
  };

  const logOut = () => {
    dispatch(authLogOut());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Новости
          </Typography>
          <div>
            <Button color="inherit" onClick={openModal('signIn')}>{ isAuth ? `${user.login}` : 'Войти'}</Button>
            <Button onClick={isAuth ? logOut : openModal('signUp')} color="inherit">{ isAuth ? 'Выйти' : 'Регистрация' }</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Modal modalType={modalType} modalClose={closeModal} />
    </Box>
  );
}
export default memo(Header);
