import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { UserAlbum } from '../UserAlbum';
import Grid from '@mui/material/Grid';

export const UserAlbumsList: React.FC = () => {
  const userAlbums = useAppSelector((state) => state.users.userAlbums);

  return (
    <Grid container>
      {userAlbums.map((userAlbum) => (
        <UserAlbum key={userAlbum.id} album={userAlbum} />
      ))}
    </Grid>
  );
};
