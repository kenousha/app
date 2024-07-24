import Home from "./Components/landing/Home";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";

import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" Component={Home}/>
                <Route path="/Login" Component={Login}/>
                <Route path="/Signup" Component={Signup}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
