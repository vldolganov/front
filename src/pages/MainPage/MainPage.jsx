import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import News from '../../components/NewsCard/NewsCard';
import Alert from '../../components/Alert/Alert';
import Loader from '../../components/Loader/Loader';

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
    <div className="main-page">
      {news.map((post) => <News post={post} key={post.id} user={post.user} />)}
    </div>
  );
}

export default memo(MainPage);