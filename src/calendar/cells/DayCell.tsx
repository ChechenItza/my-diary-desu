import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { toEntryLink } from '../../utils/date';

interface DayCellProps {
  date: Date;
  lastColumn?: boolean;
  lastRow?: boolean;
}

function DayCell({ date, lastColumn, lastRow }: DayCellProps) {
  return (
    <Link
      to={`${toEntryLink(date)}`}
      style={{ color: 'inherit', textDecoration: 'inherit' }}
    >
      <Box
        sx={{
          backgroundColor: 'background.default',
          height: '100%',
          padding: '0.6rem',
          border: '1px solid',
          borderTop: '0px',
          borderLeft: '0px',
          ...(lastColumn && { borderRight: '0px' }),
          ...(lastRow && { borderBottom: '0px' }),
          borderColor: 'divider',
          ':hover': {
            filter: 'brightness(96%)',
          },
        }}
      >
        <Typography variant="body2">{date.getDate()}</Typography>
      </Box>
    </Link>
  );
}

DayCell.defaultProps = {
  lastColumn: false,
  lastRow: false,
};

export default DayCell;
