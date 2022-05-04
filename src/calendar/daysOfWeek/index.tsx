import { Box } from '@mui/material';
import Day from './Day';

function DaysOfWeek() {
  return (
    <Box
      sx={{
        height: '1.8rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
      }}
    >
      <Day>Sun</Day>
      <Day>Mon</Day>
      <Day>Tue</Day>
      <Day>Wed</Day>
      <Day>Thu</Day>
      <Day>Fri</Day>
      <Day last>Sat</Day>
    </Box>
  );
}

export default DaysOfWeek;
