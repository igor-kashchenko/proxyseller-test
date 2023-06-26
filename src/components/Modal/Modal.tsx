import React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';

type Props = {
  children: React.ReactNode;
};

export const Modal: React.FC<Props> = ({ children }) => {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;

  return ReactDOM.createPortal(
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(5px)',
        zIndex: 10,
      }}
    >
      {children}
    </Box>,
    modalRoot
  );
};
