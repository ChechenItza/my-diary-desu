import { MenuItem, SelectChangeEvent } from '@mui/material';
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

function YearSelect() {
  const date = useContext(CalendarDateContext);
  const navigate = useNavigate();

  const changeYear = (e: SelectChangeEvent<unknown>, yeah: ReactNode) => {
    const newDate = new Date(Number(e.target.value), date.getMonth(), 1);
    navigate(toCalendarLink(newDate));
  };

  return (
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
  );
}

export default YearSelect;
