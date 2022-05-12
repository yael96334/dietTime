import logo from './logo.svg';
import './App.css';
import SignUp from './SignIn';
import Router from './Router';
import SignIn from './SignIn';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import HomePage from './HomePage';

function App() {
  // const [currentComponenet,setCurrentComponenet]=useState('login')
  return (
    <div className="App">
     
        <Router/>
        {/* < SignIn /> */}
   
    </div>
  );
}

export default App;
