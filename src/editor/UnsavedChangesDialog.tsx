import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface UnsavedChangesDialogProps {
  show: boolean;
  setShow: (show: boolean) => void;
  onSave: () => void;
}

function UnsavedChangesDialog({
  show,
  setShow,
  onSave,
}: UnsavedChangesDialogProps) {
  const handleClose = () => {
    setShow(false);
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
    handleClose();
  };

  const goBackSaved = async () => {
    onSave();
    goBack();
  };

  return (
    <Dialog
      open={show}
      onClose={handleClose}
      aria-labelledby="unsaved-changes-dialog"
      aria-describedby="unsaved-changes-description"
    >
      <DialogTitle id="unsaved-changes-dialog">Unsaved changes</DialogTitle>
      <DialogContent>
        <DialogContentText id="unsaved-changes-description">
          There are unsaved changes. Do you wish to save before leaving?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={goBack} color="secondary">
          Don&apos;t Save
        </Button>
        <Button onClick={goBackSaved} color="secondary" autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UnsavedChangesDialog;
