import { Select, styled } from '@mui/material';

const DateSelect = styled(Select)(({ theme }) => ({
  '&:before': {
    border: '0px',
  },
  '&:after': {
    borderColor: theme.palette.primary.contrastText,
  },
  '&:not(.Mui-disabled):hover::before': {
    borderColor: theme.palette.primary.contrastText,
  },
  '&  .MuiSelect-icon': {
    fill: theme.palette.primary.contrastText,
  },
  color: theme.palette.primary.contrastText,
  fontSize: '1.5rem',
  fontWeight: 'bold',
}));

export default DateSelect;
