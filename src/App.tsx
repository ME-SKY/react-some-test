import React, { useEffect, useState } from 'react';
import './App.scss';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import Snackbar from './components/ui-elements/snackbar';
import CookieSnack from './components/cookie-snack';

function App() {

  const [cookieSnackOpen, setCookieSnackOpen] = useState(false);

  useEffect(() => {
    setCookieSnackOpen(true);

    return function (){
      setCookieSnackOpen(false);
    }
  }, []);

  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
      <Snackbar open={cookieSnackOpen} >
        <CookieSnack/>
      </Snackbar>
    </div>
  );
}

export default App;
