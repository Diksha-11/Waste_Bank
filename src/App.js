import React  from 'react';
//import logo from './logo.jpg';
import Navbar from './Components/Navbar';
import Signup from './Components/signup';
//import Login from './Login';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Container } from '@material-ui/core';
import "./Components/Home.css";
import "./Components/Nav.css";
import Home from "./Components/Home.js";

const App = () =>{

   return (
		<>
		<Navbar/>
        <Home/>
       </>
		)
	};
export default App;