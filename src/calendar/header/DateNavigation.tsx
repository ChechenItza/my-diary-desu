import { MenuItem, SelectChangeEvent, Stack } from '@mui/material';
import { ReactNode, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarDateContext } from '../../contexts';
import {
  toCalendarLink,
  yearHigherBound,
  yearLowerBound,
} from '../../utils/date';
import DateSelect from './DateSelect';

function genYears(): number[] {
  const years: number[] = [];
  for (let year = yearLowerBound; year <= yearHigherBound; year++) {
    years.push(year);
  }

  return years;
}

function DateNavigation() {
  const date = useContext(CalendarDateContext);
  const navigate = useNavigate();

  const changeMonth = (e: SelectChangeEvent<unknown>, yeah: ReactNode) => {
    const newDate = new Date(date.getFullYear(), Number(e.target.value), 1);
    navigate(toCalendarLink(newDate));
  };

  const changeYear = (e: SelectChangeEvent<unknown>, yeah: ReactNode) => {
    const newDate = new Date(Number(e.target.value), date.getMonth(), 1);
    navigate(toCalendarLink(newDate));
  };

  return (
    <Stack
      direction="row"
      alignItems="baseline"
      alignSelf="center"
      sx={{
        gridColumnStart: 2,
      }}
    >
      <DateSelect
        id="month-select"
        value={String(date.getMonth())}
        onChange={changeMonth}
        variant="standard"
        MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
        sx={{
          marginRight: '1rem',
        }}
      >
        <MenuItem value={0}>January</MenuItem>
        <MenuItem value={1}>February</MenuItem>
        <MenuItem value={2}>March</MenuItem>
        <MenuItem value={3}>April</MenuItem>
        <MenuItem value={4}>May</MenuItem>
        <MenuItem value={5}>June</MenuItem>
        <MenuItem value={6}>July</MenuItem>
        <MenuItem value={7}>August</MenuItem>
        <MenuItem value={8}>September</MenuItem>
        <MenuItem value={9}>October</MenuItem>
        <MenuItem value={10}>November</MenuItem>
        <MenuItem value={11}>December</MenuItem>
      </DateSelect>
      <DateSelect
        id="year-select"
        value={String(date.getFullYear())}
        onChange={changeYear}
        variant="standard"
        MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
        sx={{
          fontSize: '1.35rem',
        }}
      >
        {genYears().map((val) => (
          <MenuItem value={val} key={val}>
            {val}
          </MenuItem>
        ))}
      </DateSelect>
    </Stack>
  );
}

export default DateNavigation;
