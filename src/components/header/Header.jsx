import React, { memo } from 'react';
import { Link } from 'react-router-dom';
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

import './Header.css';
import { authLogOut } from '../../redux/actions/auth';
import Loader from '../loader/Loader';

function Header() {
  const { user, isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
            <Link to={isAuth ? '/' : '/auth/signin'} className="header-button">
              <Button color="inherit">{ isAuth ? `${user.login}` : 'Войти'}</Button>
            </Link>
            <Link to={isAuth ? '/' : '/auth/signup'} className="header-button">
              <Button onClick={() => dispatch(authLogOut())} color="inherit">{ isAuth ? 'Выйти' : 'Регистрация' }</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default memo(Header);
