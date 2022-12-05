import React, { memo } from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Card, CardActions, CardContent, CardMedia, Button, Typography,
} from '@mui/material';

import './UserCard.css';

function UserCard(
  {
    user: {
      login,
      name,
      email,
      avatar,
    },
  },
) {
  const user = useSelector((state) => state.auth);
  const { id } = useParams();
  const authUserId = user.user.id;

  return (
    <Card sx={{ maxWidth: 345 }} className="user-card">
      <CardMedia
        className="avatar"
        component="img"
        alt="user-avatar"
        height="140"
        image={avatar}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Login: &nbsp;
          {login}
          <br />
          Email:
          {email}

        </Typography>
      </CardContent>
      <CardActions>
        {authUserId === Number(id) ? <Button variant="contained">Edit profile</Button> : ''}
      </CardActions>
    </Card>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
};

export default memo(UserCard);
