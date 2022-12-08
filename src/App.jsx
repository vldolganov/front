import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { authCheckRequest } from './redux/actions/auth';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';
import getData from './utils/localstorage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (getData) {
      dispatch(authCheckRequest());
    }
  }, []);
  return (
    <div className="all-elem">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default memo(App);
