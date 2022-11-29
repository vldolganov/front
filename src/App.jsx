import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import MainPage from './pages/mainPage/MainPage';
import AuthPage from './pages/authPage/AuthPage';

import { authCheckRequest } from './redux/actions/auth';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      dispatch(authCheckRequest());
    }
  }, []);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/signup" element={<AuthPage />} />
        <Route path="/auth/signin" element={<AuthPage />} />
        <Route path="/auth" Naviga/>
      </Routes>
    </div>
  );
}

export default memo(App);
