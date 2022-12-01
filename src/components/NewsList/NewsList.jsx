import React, { memo } from 'react';
import PropTypes from 'prop-types';

import News from '../newsCard/News';

function NewsList({ news }) {
  return (
    <div className="main-page">
      {news.map((post) => <News post={post} key={post.id} />)}
    </div>
  );
}

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default memo(NewsList);

