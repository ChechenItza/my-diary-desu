import { MenuItem, SelectChangeEvent } from '@mui/material';
import { ReactNode, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarDateContext } from '../../contexts';
import { toCalendarLink } from '../../utils/date';
import DateSelect from './DateSelect';

function MonthSelect() {
  const date = useContext(CalendarDateContext);
  const navigate = useNavigate();

  const changeMonth = (e: SelectChangeEvent<unknown>, yeah: ReactNode) => {
    const newDate = new Date(date.getFullYear(), Number(e.target.value), 1);
    navigate(toCalendarLink(newDate));
  };

  return (
    <DateSelect
      id="month-select"
      value={String(date.getMonth())}
      onChange={changeMonth}
      variant="standard"
      MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
      sx={{
        marginRight: '0.5rem',
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
  );
}

export default MonthSelect;
