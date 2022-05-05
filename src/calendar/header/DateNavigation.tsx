import { Stack } from '@mui/material';
import MonthSelect from './MonthSelect';
import YearSelect from './YearSelect';

function DateNavigation() {
  return (
    <Stack
      direction="row"
      alignItems="baseline"
      alignSelf="center"
      sx={{
        gridColumnStart: 2,
      }}
    >
      <MonthSelect />
      <YearSelect />
    </Stack>
  );
}

export default DateNavigation;
