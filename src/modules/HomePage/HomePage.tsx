import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { fetchUserAlbums, fetchUsers } from '../../redux/users';
import { UserList } from '../../components/UserList';
import { Modal } from '../../components/Modal';
import { UserAlbumsList } from '../../components/UserAlbumsList';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

export const HomePage: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedUserName, setSelectedUserName] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleOpenModal = (userId: number, username: string) => {
    dispatch(fetchUserAlbums(userId));
    setSelectedUserName(username);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Typography variant="h3" textAlign={'center'} color={'#4c4c6d'} mb={2}>
        Users
      </Typography>

      <UserList handleOpenModal={handleOpenModal} />

      {openModal && (
        <Modal>
          <CloseIcon
            onClick={handleCloseModal}
            sx={{
              m: 2,
              boxSizing: 'border-box',
              color: '#fff',
              cursor: 'pointer',
              transition: 'transform 0.3s linear',
              ':hover': {
                transform: 'scale(1.2)',
              },
            }}
          />

          <Box
            maxWidth={'1200px'}
            p={2}
            height={'85vh'}
            borderRadius={'10px'}
            overflow="auto"
            m="auto"
            sx={{
              background: '#FFF',
            }}
          >
            <Typography
              variant="h3"
              textAlign={'center'}
              color={'#4c4c6d'}
              mb={2}
            >
              {`${selectedUserName}'s albums`}
            </Typography>

            <UserAlbumsList />
          </Box>
        </Modal>
      )}
    </>
  );
};
