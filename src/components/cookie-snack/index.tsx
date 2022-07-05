import React from 'react';
import './cookie-snack.scss';
import Button from '../ui-elements/button';
import Link from '@mui/material/Link';

function CookieSnack(props: any) {
  return (
    <div className='cookie-snack'>

      <div className='consent'>

        <p className='title'>Cookie consent</p>
        <p className='text'>
          This website uses cookies. By continuing to browse, you are accepting its use. If you want to know more, see our <Link href="#" color={'#6542F3'} style={{textDecorationThickness: '1px', fontWeight: '600'}}>Privacy Policy</Link>.
        </p>
      </div>

      <div className='actions'>
        <Button filling={'standard-unbordered'} sx={{width: '7.4em', height: '3.5em'}} textColor ='#0E0C20'>reject</Button>
        <Button filling = {'standard'} sx={{width: '7.4em', height: '3.5em'}} textColor ='#FFFFFF'>accept</Button>
      </div>
    </div>
  );
}

export default CookieSnack;
