import React, {useState} from 'react';
import Checkbox, {CheckboxProps} from '@mui/material/Checkbox';
import './checkbox.scss';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

interface UiCheckboxProps extends CheckboxProps {
  label?: string | JSX.Element;
  checkmarkColor?: string;
  onChangeState?: Function;
}

function UiCheckbox(props: UiCheckboxProps) {

  const {label, checkmarkColor, checked} = props;
  const {onChangeState, ...checkboxProps} = props;

  const [cbxChecked, setChecked] = useState<boolean>(!!checked);

  const changeCheckedStat = function (newState: boolean) {
    setChecked(newState);
    onChangeState && onChangeState(newState);
  };

  return (
    <div className='ui-checkbox'>
      <div className='checkbox'>
        <Checkbox onChange={({target: {checked}}) => changeCheckedStat(checked)}
                  checkedIcon={

                    <CheckOutlinedIcon
                      fontSize='small'/>}
                  sx={{
                    '&.MuiCheckbox-root':
                      {
                        color: 'transparent',
                        gridColumn: ' 1 / 1',
                        gridRow: '1 / 1',
                        width: '100%',
                        height: '100%',

                        '&.Mui-checked': {
                          color: checkmarkColor ? checkmarkColor : 'white',
                        },

                      },
                    '.MuiSvgIcon-root': {
                      position: 'absolute',
                    }
                  }}
                  {...checkboxProps}/>
        <div className='checkmark-background'>
          {
            !cbxChecked && <span className='fill'/>
          }
        </div>
      </div>
      {label &&
          <div className='label'>
            {label}
          </div>
      }
    </div>

  );
}

export default UiCheckbox;
