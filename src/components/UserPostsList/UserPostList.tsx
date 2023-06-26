import React from 'react';
import { UserPost } from '../UserPost/UserPost';
import { useAppSelector } from '../../redux/hooks';
import Grid from '@mui/material/Grid';

export const UserPostList: React.FC = () => {
  const userPosts = useAppSelector((state) => state.users.userPosts);

  return (
    <Grid container height={'85vh'} overflow={'auto'}>
      {userPosts.map((userPost) => (
        <UserPost key={userPost.id} post={userPost} />
      ))}
    </Grid>
  );
};
