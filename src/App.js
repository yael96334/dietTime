import logo from './logo.svg';
import './App.css';
import SignUp from './SignIn';
import Router from './Router';
import SignIn from './SignIn';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './css/bootstrap.min.css';
// import HomePage from './HomePage';
// import Display from './DisplayPdf'
import UpLoad from './UpLoad';
// import './css/bootstrap.min.css';
// import { CreditCard } from '@mui/icons-material';
import SinglePage from './SinglePagePDFViewer';
import CreditCard from './CreditCard';
import About from './About';
function App() {
  return (
    <div className="App">
      {/* <UpLoad/> */}
     {/* <Display/>  */}
     {/* <CreditCard/> */}
     <About/>
         {/* <Router/>  */}
        {/* < SignIn /> */}
        
   
    </div>
  );
}

export default App;