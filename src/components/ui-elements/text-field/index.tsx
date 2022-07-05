import React from 'react';
// import './text-field.scss'
import TextField , {TextFieldProps} from '@mui/material/TextField';

function UiTextField(props: TextFieldProps) {
  return (

    <TextField sx={{
      '&.MuiTextField-root':
        {
          width: '100%'
        },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#7338F6',
      },
      '.Mui-focused': {
        color: '#7338F6 !important',
      },
    }} label="Email" variant="standard" />

  );
}

export default UiTextField;


