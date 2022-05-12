import { Link,Routes,Route,BrowserRouter } from 'react-router-dom';
import Subscribe from './Subscribe';
import SignIn from './SignIn';
import { Router } from '@mui/icons-material';
export default function r(){
return(
    <>
   
    <Routes>
        <Route path="/Subscribe" element={<Subscribe/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/" element={<SignIn/>}/>

    </Routes>
   
    
    </>
)
}