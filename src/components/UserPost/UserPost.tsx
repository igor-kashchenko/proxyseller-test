import React from 'react';
import { Post } from '../../types/Post';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  post: Post;
};

export const UserPost: React.FC<Props> = ({ post }) => {
  const { id, title, body } = post;

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

      <Typography variant="h6" fontWeight={'bold'} color={'#4c4c6d'} mb={2}>
        {title}
      </Typography>

      <Typography color={'#4c4c6d'}>{body}</Typography>
    </Box>
  );
};
