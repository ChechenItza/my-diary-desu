type Entry = {
  [key: string]: string;
};

const entryStorage: Entry = {};

export function getEntry(date: string): string {
  if (entryStorage[date] === undefined) return '';
  return entryStorage[date];
}

export function saveEntry(date: string, entry: string): void {
  entryStorage[date] = entry;
}
