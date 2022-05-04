interface EntryEditorProps {
  entry: string;
  setEntry: (newEntry: string) => void;
}

function EntryEditor({ entry, setEntry }: EntryEditorProps) {
  return (
    <textarea
      value={entry}
      onChange={(e) => setEntry(e.target.value)}
      placeholder="Enter text here..."
      style={{
        border: 'none',
        overflow: 'auto',
        outline: 'none',
        WebkitBoxShadow: 'none',
        MozBoxShadow: 'none',
        boxShadow: 'none',
        flex: 1,
        resize: 'none',
        fontFamily: 'Roboto',
        fontSize: '1rem',
        padding: '1rem',
      }}
    />
  );
}

export default EntryEditor;
