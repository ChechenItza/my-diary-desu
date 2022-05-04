import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { parseCalendarDate } from '../utils/date';
import Calendar from '../calendar';
import { CalendarDateContext } from '../contexts';

function CalendarDateValidator() {
  const { date } = useParams() as { date: string };
  const parsedDate = useMemo(() => parseCalendarDate(date), [date]);

  if (parsedDate === null) return <Navigate replace to="/" />;

  return (
    <CalendarDateContext.Provider value={parsedDate}>
      <Calendar />
    </CalendarDateContext.Provider>
  );
}

export default CalendarDateValidator;
