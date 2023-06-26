import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { Link } from 'react-router-dom';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';

type Props = {
  handleOpenModal: (userId: number, username: string) => void;
};

export const UserList: React.FC<Props> = ({ handleOpenModal }) => {
  const users = useAppSelector((state) => state.users.users);

  return (
    <TableContainer
      sx={{
        margin: '0 auto',
        border: '1px solid #ddd',
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: 'bold',
              }}
            >
              ID
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 'bold',
              }}
            >
              Username
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 'bold',
              }}
            >
              Name
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 'bold',
              }}
            >
              Email
            </TableCell>
            <TableCell
              align="right"
              sx={{
                fontWeight: 'bold',
              }}
            >
              Posts
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
            const { id, username, name, email } = user;

            return (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{username}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell align="right">
                  <Link to={`/${id}/posts`}>
                    <Button
                      variant="contained"
                      sx={{
                        mr: 2,
                      }}
                    >
                      Posts
                    </Button>
                  </Link>

                  <Button
                    variant="contained"
                    onClick={() => handleOpenModal(id, username)}
                  >
                    Albums
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
