import { Box } from '@mui/material';
import { useContext, useMemo } from 'react';
import { CalendarDateContext } from '../../contexts';
import DayCell from './DayCell';
import EmptyCell from './EmptyCell';

function genCells(date: Date): React.ReactNode[] {
  const cells: React.ReactNode[] = [];

  // push empty cells until the first day in this month
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  for (let i = 0; i < firstDay; i++)
    cells.push(<EmptyCell key={cells.length} />);

  // push day cells until the last day in this month
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(
      <DayCell
        key={cells.length}
        date={new Date(date.getFullYear(), date.getMonth(), day)}
        lastColumn={(cells.length + 1) % 7 === 0}
        lastRow={cells.length + 1 > 35}
      />
    );
  }

  // push empty cells again to fill the rest of the calendar
  while (cells.length < 42)
    cells.push(
      <EmptyCell
        key={cells.length}
        lastColumn={(cells.length + 1) % 7 === 0}
        lastRow={cells.length + 1 > 35}
      />
    );

  return cells;
}

function Cells() {
  const date = useContext(CalendarDateContext);
  const cells = useMemo(() => genCells(date), [date]);
  return (
    <Box
      sx={{
        flex: '1 1 0%',
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gridTemplateRows: 'repeat(6, 1fr)',
      }}
    >
      {cells}
    </Box>
  );
}

export default Cells;
