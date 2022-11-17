import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import News from '../../components/news-card/News';
import Alert from '../../components/alert/Alert';
import { getNewsRequest } from '../../redux/actions/news';
import Loader from '../../components/loader/Loader';

import '../main-page/'

function MainPage() {
  const { news, isLoading, error } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsRequest());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Alert message={error} severity="error" />;
  }
  if (!news.length) {
    return <Alert message="News not found" severity="info" />;
  }
  return (
    <div className="main-page">
      {news.map((post) => <News post={post} />)}
    </div>
  );
}
export default MainPage;
