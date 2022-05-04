import { Box } from '@mui/material';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

function HeaderContainer({ children }: Props) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        backgroundColor: 'primary.main',
        padding: '1rem',
        height: '4.8rem',
      }}
    >
      {children}
    </Box>
  );
}

export default HeaderContainer;
