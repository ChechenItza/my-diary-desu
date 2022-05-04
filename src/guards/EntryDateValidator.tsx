import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { parseEntryDate } from '../utils/date';
import { EntryDateContext } from '../contexts';
import Editor from '../editor';

function EntryDateValidator() {
  const { date } = useParams() as { date: string };
  const parsedDate = useMemo(() => parseEntryDate(date), [date]);

  if (parsedDate === null) return <Navigate replace to="/" />;

  return (
    <EntryDateContext.Provider value={parsedDate}>
      <Editor />
    </EntryDateContext.Provider>
  );
}

export default EntryDateValidator;
