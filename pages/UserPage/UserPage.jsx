import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import UserCard from '../../components/UserCard/UserCard';
import Alert from '../../components/alert/Alert';
import Loader from '../../components/loader/Loader';
import News from '../../components/newsCard/News';

import { getUserRequest } from '../../redux/actions/user';

import './UserPage.css';

function UserPage() {
  const { user, isLoading, error } = useSelector((state) => state.user);
  const { id } = useParams();
  const { news } = user;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserRequest(id));
  }, [id]);

  if (error) {
    return <Alert message={error} severity="error" />;
  }
  if (!Object.keys(user).length) {
    return <Alert message="User not found" severity="info" />;
  }

  if (isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="user-page">
      <UserCard user={user} />
      <div className="news-on-user-page">
        {news && news.map((item) => <News post={item} user={user} />)}
      </div>
    </div>
  );
}

export default memo(UserPage);
