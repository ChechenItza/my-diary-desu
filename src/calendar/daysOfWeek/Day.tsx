import { Stack, Typography } from '@mui/material';

interface DayProps {
  children: React.ReactNode;
  last?: boolean;
}
function Day({ children, last }: DayProps) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: 'background.inactive',
        border: '1px solid',
        borderLeft: '0px',
        ...(last && { borderRight: '0px' }),
        borderColor: 'divider',
        flex: '1',
      }}
    >
      <Typography variant="body2" fontWeight={700}>
        {children}
      </Typography>
    </Stack>
  );
}
Day.defaultProps = {
  last: false,
};

export default Day;
