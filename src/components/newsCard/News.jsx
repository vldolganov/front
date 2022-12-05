import React, { memo } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
} from '@mui/material/';
import { red } from '@mui/material/colors';

import './News.css';

function NewsCard({
  post: {
    title,
    content,
    picture,
    tags,
  },
  user: {
    login,
    avatar,
    id,
  },
}) {
  return (
    <Card sx={{ maxWidth: 345 }} className="news-card">
      <CardHeader
        avatar={(
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={`${avatar}`} />
        )}
        title={(<Link to={`/user/${id}`} className="user-name-news">{login }</Link>)}
      />
      <CardMedia
        component="img"
        height="194"
        image={picture}
        alt="Paella dish"
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          #
          {tags}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

NewsCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default memo(NewsCard);
