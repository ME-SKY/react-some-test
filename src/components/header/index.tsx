import React from 'react';
import './header.scss'
import Button from '../ui-elements/button';

function Header(){

  return (
    <header className='header'>
      <div className='logo'>Logo Name</div>


      <div className='action-button'>
        <Button filling={'outline'} sx={{borderRadius: '8px'}}>action</Button>
      </div>
    </header>
  )
}

export default Header;
