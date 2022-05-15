import { Link,Routes,Route,BrowserRouter } from 'react-router-dom';
import Subscribe from './Subscribe';
import SignIn from './SignIn';
import { Router } from '@mui/icons-material';
import Reg from './Reg';
 import Card from './Card.js';
export default function r(){
return(
    <>
   
    <Routes>
        <Route path="/Subscribe" element={<Subscribe/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/Reg" element={<Reg/>}/>
        <Route path="/Card" element={<Card/>}/>

        <Route path="/" element={<Subscribe/>}/>

    </Routes>
   
    
    </>
)
}