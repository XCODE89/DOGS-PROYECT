// import { Landing, Home, Form, Detail } from './Coomponets/allComponents';
import './App.css';
import {Routes, Route} from "react-router-dom"
import { useLocation } from 'react-router-dom';
import Detail from './Components/Detail/detail';
import Form from './Components/Form/form';
import Home from './Components/Home/home';
import Landing from './Components/Landing/landing';
import NavBar from './Components/NavBar/navBar';

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname === "/"? <Landing/> : <NavBar/>}      
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:idRaza' element={<Detail/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
