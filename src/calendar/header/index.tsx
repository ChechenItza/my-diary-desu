import { Settings } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import HeaderContainer from '../../components/HeaderContainer';
import DateNavigation from './DateNavigation';

function Header() {
  return (
    <HeaderContainer>
      <DateNavigation />
      <IconButton
        sx={{
          gridColumnStart: 3,
          justifySelf: 'right',
          color: 'primary.contrastText',
        }}
        aria-label="settings"
      >
        <Settings />
      </IconButton>
    </HeaderContainer>
  );
}

export default Header;
