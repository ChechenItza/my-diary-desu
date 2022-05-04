import { Box, styled } from '@mui/material';

interface EmptyCellProps {
  lastColumn?: boolean;
  lastRow?: boolean;
}
const EmptyCell = styled(Box)<EmptyCellProps>(
  ({ theme, lastColumn, lastRow }) => ({
    backgroundColor: theme.palette.background.inactive,
    border: '1px solid',
    borderTop: '0px',
    borderLeft: '0px',
    ...(lastColumn && { borderRight: '0px' }),
    ...(lastRow && { borderBottom: '0px' }),
    borderColor: theme.palette.divider,
  })
);

export default EmptyCell;
