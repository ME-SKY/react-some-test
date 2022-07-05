import React, {useEffect, useState} from 'react';
import Snackbar, {SnackbarProps}from '@mui/material/Snackbar';
import {Slide} from '@mui/material';

type vertical = 'top' | 'bottom';
type horizontal = 'left' | 'right' | 'center';

interface UiSnackbarProps extends SnackbarProps{}

function UiSnackbar(props: UiSnackbarProps) {
  const [open, setOpen] = useState<boolean>(  false);

  const [vertical, horizontal]: [vertical, horizontal] = ['bottom', 'center'];

  const handleClose = (event: any, reason: any) => {
    reason !== 'clickaway' && setOpen(false);
  };

  useEffect(() => {
    props.open && setOpen(props.open);
  }, [props.open])

  return (
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        transitionDuration={{ enter: 2800, exit: 2000 }}
        TransitionComponent={Slide}
        TransitionProps={{ enter: true, exit: false}}
        key={vertical + horizontal}

      >
        <div className={'ui-snackbar'}>
          {props.children && props.children}
        </div>
      </Snackbar>
  );
}

export default UiSnackbar;
