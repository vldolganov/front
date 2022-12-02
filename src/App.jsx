import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import MainPage from './pages/mainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';
import getData from './utils/localstorage';
import { authCheckRequest } from './redux/actions/auth';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (getData) {
      dispatch(authCheckRequest());
    }
  }, []);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default memo(App);
