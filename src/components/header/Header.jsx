import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';

import Modal from '../modal/Modal';

import { modalOpen, modalClose } from '../../redux/actions/modal';
import { authLogOut } from '../../redux/actions/auth';

import './Header.css';

function Header() {
  const dispatch = useDispatch();
  const { user, isAuth } = useSelector((state) => state.auth);

  const logOut = () => {
    dispatch(authLogOut());
  };

  const closeModalWindow = () => {
    dispatch(modalClose());
  };

  const openSignIn = () => {
    dispatch(modalOpen('signIn'));
  };

  const openSignUp = () => {
    dispatch(modalOpen('signUp'));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="header-name">
              Новости
            </Link>
          </Typography>
          <div>
            <Button color="inherit" onClick={isAuth ? () => {} : openSignIn}>
              {isAuth ? (
                <Link to={`/user/${user.id}`} className="user-name">
                  {user.name}
                </Link>
              ) : 'Войти'}
            </Button>
            <Button color="inherit" onClick={isAuth ? logOut : openSignUp}>{isAuth ? 'Выйти' : 'Регистрация'}</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Modal modalClose={closeModalWindow} />
    </Box>
  );
}
export default memo(Header);
