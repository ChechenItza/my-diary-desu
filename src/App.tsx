import { Stack, Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background:
          'linear-gradient(rgb(255, 111, 96) 0%, rgb(255, 111, 96) 13%, white 13%, white 100%)',
      }}
    >
      <Paper
        elevation={2}
        sx={{
          width: '58vw',
          height: '86vh',
          overflow: 'hidden',
          borderRadius: '9px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Outlet />
      </Paper>
    </Stack>
  );
}

export default App;
