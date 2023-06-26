import React from 'react';
import { Album } from '../../types/Album';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  album: Album;
};

export const UserAlbum: React.FC<Props> = ({ album }) => {
  const { id, title } = album;

  return (
    <Box
      border={'1px solid #4c4c6d'}
      width={'100%'}
      borderRadius={'10px'}
      p={2}
      mb={2}
    >
      <Typography fontWeight={'bold'} color={'#4c4c6d'}>
        {id}
      </Typography>

      <Typography variant="h6" fontWeight={'bold'} color={'#4c4c6d'}>
        {title}
      </Typography>
    </Box>
  );
};
