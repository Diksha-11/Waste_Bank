import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Nav.css';
 

const Navbar = () =>{
    return(
        
        <>
        
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">

<div class="sohil"> 
  <img src="./logo6.png" alt ="ka"/>
  </div>

    <a class="navbar-brand" href="#">Waste Bank</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <h1 style={{paddingLeft:"65%" }}></h1>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./signup.js">Registration</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.dreamhatcher.in/">About Us</a>
        </li>

        <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      

     
    </div>
  </div>
</nav>
       </>
    )
    
}

export default Navbar;