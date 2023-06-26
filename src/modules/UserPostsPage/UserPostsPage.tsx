import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchUserPosts } from '../../redux/users';
import { useNavigate, useParams } from 'react-router-dom';
import { UserPostList } from '../../components/UserPostsList';
import Typography from '@mui/material/Typography';

export const UserPostsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const { userId = '' } = useParams();
  const navigate = useNavigate();

  const foundUser = users.find((user) => user.id === +userId);

  const username = foundUser ? foundUser.username : '';

  useEffect(() => {
    if (!foundUser) {
      navigate('/');
    } else {
      dispatch(fetchUserPosts(userId));
    }
  }, [dispatch, foundUser, navigate, userId]);

  return (
    <>
      <Typography variant="h3" textAlign={'center'} color={'#4c4c6d'} mb={2}>
        {`${username}'s posts`}
      </Typography>

      <UserPostList />
    </>
  );
};
