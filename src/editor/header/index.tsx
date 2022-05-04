import { ChevronLeft, Save } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HeaderContainer from '../../components/HeaderContainer';
import DateDisplay from './DateDisplay';

interface HeaderProps {
  saveDisabled: boolean;
  onSave: () => void;
  setShow: (show: boolean) => void;
  date: Date;
}

function Header({ saveDisabled, onSave, setShow, date }: HeaderProps) {
  const navigate = useNavigate();

  const goBack = () => {
    if (!saveDisabled) setShow(true);
    else navigate(-1);
  };

  return (
    <HeaderContainer>
      <IconButton
        onClick={goBack}
        sx={{
          justifySelf: 'left',
          color: 'primary.contrastText',
        }}
        aria-label="settings"
      >
        <ChevronLeft />
      </IconButton>
      <DateDisplay date={date} />
      <IconButton
        disabled={saveDisabled}
        onClick={onSave}
        sx={{
          justifySelf: 'right',
          color: 'primary.contrastText',
        }}
        aria-label="settings"
      >
        <Save />
      </IconButton>
    </HeaderContainer>
  );
}

export default Header;
