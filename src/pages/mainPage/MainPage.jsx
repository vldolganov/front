import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewsList from '../../components/NewsList/NewsList';
import Alert from '../../components/alert/Alert';
import Loader from '../../components/loader/Loader';

import { getNewsRequest } from '../../redux/actions/news';

import './MainPage.css';

function MainPage() {
  const { news, isLoading, error } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsRequest());
  }, []);
  if (error) {
    return <Alert message={error} severity="error" />;
  }
  if (!news.length) {
    return <Alert message="News not found" severity="info" />;
  }
  if (isLoading) {
    return (
      <Loader />
    );
  }
  return (
    <NewsList news={news} />
  );
}

export default memo(MainPage);
