import { React, useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import News from '../news-card/News';
import Alert from '../alert/Alert';
import getNewsRequest from '../../redux/actions/news';
import Loader from '../loader/Loader';

import './MainPage.css';

function MainPage() {
  const { news, isLoading, error } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsRequest());
  }, []);

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
export default memo(MainPage);
