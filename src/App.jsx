import React,{useState} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'

/*_____________import component and pages */
import NavBar from './Component/NavBar';
import Home from './Pages/Home';
import Courses from './Pages/Courses/Courses';
import AddCart from "./Pages/AddCart"
import Pactices from './Pages/Pactices/Pactices';
import UseAI from './Pages/UseAI';

/*_________________________________________________________________ */


import  JavaScript from './Pages/Pactices/Quize/JavaScript';
import Htmlcss from './Pages/Pactices/Quize/Htmlcss';
import Quize_react from './Pages/Pactices/Quize/Quize_react';



/*___________________________________________________________________ */

export default function App(){
  let [addCart,setaddCart] =useState([]);
  let [CoursesDetails,setCoursesDetails] = useState([]);
  
  return(

    <div>
     <BrowserRouter>
    
     <NavBar/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Courses/*" element={<Courses CoursesDetails={CoursesDetails} setCoursesDetails={setCoursesDetails} addCart={addCart} setaddCart={setaddCart}/>}/>
      
      <Route path="/Pactices" element={<Pactices/>}/>

      <Route path="UseAI" element={<UseAI/>}/>


      <Route path="/AddCart" element={<AddCart addCart={addCart} setaddCart={setaddCart}/>}/>

     
      <Route path="/Pactices/JavaScript" element={<JavaScript/>}/>
      <Route path="/Pactices/Htmlcss" element={<Htmlcss/>}/>
      <Route path="/Pactices/Quize_react" element={<Quize_react/>}/>

    
    </Routes>
     </BrowserRouter>
    </div>
  )
}