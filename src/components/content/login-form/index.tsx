import React, {useState} from 'react';
import './login-form.scss';
import TextField from '../../ui-elements/text-field';
import Checkbox from '../../ui-elements/checkbox';
import Link from '@mui/material/Link';
import Button from '../../ui-elements/button';

function LoginForm() {

  const [userEmail, setUserEmail] = useState('');
  const [cookieCheckbox, setCookieCheckbox] = useState(false);

  const loginLabel = <p>{'I agree with '}
    <Link color={'#6542F3'}
          style={{textDecorationThickness: '1px', fontWeight: '600'}} href="#" >
      Privacy Policy
    </Link>
  </p>;

  return (
    <div className='login-form'>
      <div className='welcome-text'>
        Lorem ipsum <br/>
        Lorem ipsum lorem <br/>
        Lorem ipsum lorem ipsum
      </div>

      <div className='form'>

        <div className='field'>
          <TextField onChange = {(value) => setUserEmail(value.target.value)}
                     value={userEmail}
                     placeholder={'Email'}/>
        </div>

        <div className='field checkbox-field'>
          <Checkbox
            onChangeState={(checked: boolean) => setCookieCheckbox(checked)}
            checked={cookieCheckbox}
            label={loginLabel}/>
        </div>

        <div className='field'>
          <Button disabled={!cookieCheckbox}>enter</Button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
