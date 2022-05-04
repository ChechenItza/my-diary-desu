import { Stack, Typography } from '@mui/material';

function DateDisplay({ date }: { date: Date }) {
  return (
    <Stack direction="row" alignItems="baseline" sx={{ alignSelf: 'center' }}>
      <Typography
        fontSize="1.6rem"
        color="primary.contrastText"
        fontWeight="bold"
        marginRight="0.4rem"
      >
        {date.getDate()}
      </Typography>
      <Typography
        fontSize="1.6rem"
        color="primary.contrastText"
        fontWeight="bold"
        marginRight="0.5rem"
      >
        {date.toLocaleString('default', { month: 'long' })}
      </Typography>
      <Typography
        color="primary.contrastText"
        fontWeight="bold"
        fontSize="1rem"
      >
        {date.getFullYear()}
      </Typography>
    </Stack>
  );
}

export default DateDisplay;
