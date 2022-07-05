import React from 'react';
import './content.scss';
import Illustration from './illustration';
import LoginForm from './login-form'

function Content() {

  return (
    <div className='content'>

      <Illustration/>

      <div className='entrance'>
        <LoginForm/>
      </div>
    </div>
  );
}

export default Content;
