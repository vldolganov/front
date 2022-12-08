import React, { memo } from 'react';
import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

import { modalOpen, modalClose } from '../../redux/actions/modal';
import UserModal from '../Modal/UserModal/UserModal';

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
  const dispatch = useDispatch();

  const closeModalWindow = () => {
    dispatch(modalClose());
  };

  const openModal = () => {
    dispatch(modalOpen('add'));
  };
  const { user: { id } } = useSelector((state) => state.auth);
  const pathId = useParams();

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
        {id === Number(pathId.id)
          ? (
            <div className="profile-buttons">
              <Button variant="contained">Edit profile</Button>
              <Button variant="contained" onClick={openModal}>Add News</Button>
            </div>
          )
          : ''}
      </CardActions>
      <UserModal modalClose={closeModalWindow} />

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
