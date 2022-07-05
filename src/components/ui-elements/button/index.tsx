import React from 'react';
import Button, {ButtonProps} from '@mui/material/Button';
import './button.scss';

type fillingType = 'outline' | 'default' | 'standard-unbordered' | 'standard';

interface UiButtonProps extends ButtonProps{
  filling?: fillingType,
  textColor?: string
}


function UiButton(props: UiButtonProps) {

  const {textColor, ...buttonProps} = props;

  return (
    <Button className={`ui-button ${props.filling}`}  {...buttonProps}>
      <div style={{color: props.textColor && props.textColor }} className={`text ${(props.filling === 'outline') ? 'gradient-text' : ''}`}>
          {props.children}
      </div>
    </Button>
  );
}

export default UiButton;
