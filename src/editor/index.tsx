import { useContext, useEffect, useState } from 'react';
import { EntryDateContext } from '../contexts';
import { getEntry, saveEntry } from '../services/entry';
import { fromEntryDateToDate } from '../utils/date';
import EntryEditor from './EntryEditor';
import Header from './header';
import UnsavedChangesDialog from './UnsavedChangesDialog';

function Editor() {
  const [entry, setEntry] = useState('');
  const [oldEntry, setOldEntry] = useState(entry);

  const [showAlert, setShow] = useState(false);

  const date = useContext(EntryDateContext);

  useEffect(() => {
    const storedEntry = getEntry(date);
    setEntry(storedEntry);
    setOldEntry(storedEntry);
  }, [date]);

  const onSave = () => {
    saveEntry(date, entry);
    setOldEntry(entry);
  };

  return (
    <>
      <Header
        saveDisabled={oldEntry === entry}
        onSave={onSave}
        setShow={setShow}
        date={fromEntryDateToDate(date)}
      />
      <EntryEditor entry={entry} setEntry={setEntry} />
      <UnsavedChangesDialog
        show={showAlert}
        setShow={setShow}
        onSave={onSave}
      />
    </>
  );
}

export default Editor;
