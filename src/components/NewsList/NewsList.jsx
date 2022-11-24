import React, { memo } from 'react';
import PropTypes from 'prop-types';
import News from '../newsCard/News';

function NewsList({ news }) {
  return (
    <div className="main-page">
      {news.map((post) => <News post={post} />)}
    </div>
  );
}

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default memo(NewsList);
