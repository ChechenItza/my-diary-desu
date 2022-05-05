import { Stack, Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Stack justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper
        elevation={5}
        sx={{
          width: '58vw',
          height: '86vh',
          overflow: 'hidden',
          borderRadius: '15px',
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
