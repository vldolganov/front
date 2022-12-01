import React, { memo } from 'react';
import { PropTypes } from 'prop-types';

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material/';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function NewsCard({
  post: {
    title,
    content,
    picture,
    tags,
    createdAt,
  },
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={(
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {picture}
          </Avatar>
        )}
        action={(
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        )}
        title="Shrimp and Chorizo Paella"
        subheader={createdAt}
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
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default memo(NewsCard);

