import React from "react";
import './signup.css';
import { TextField,Button, Divider } from '@material-ui/core';
import {link} from "react-router-dom";


const signup = () =>{
    return(
        <div>

      <div className="app">
          <div className="icon">
              <div className="icon_class"></div>
              <div className="text">Sign In</div>
           </div>

          {/*<div className="row m-2">
              <div className="col-6 p-2">
                <TextField id="firstname" type="text" variant="outlined" label="Enter Name" fullWidth/>
              </div>
              <div className="col-6 p-2">
              <TextField id="lastname" type="text" variant="outlined" label="Enter Last Name" fullWidth/>
              </div>
           </div>*/}

          <div className="row m-2">
          <TextField id="name" className="p-2" type="text" variant="outlined" label="Enter Name" fullWidth/>
          <TextField id="email" className="p-2" type="text" variant="outlined" label="Enter Email" fullWidth/>
          <TextField id="phone" className="p-2" type="text" variant="outlined" label="Enter Phone No." fullWidth/>
          <TextField id="Password" className="p-2"  type="text" variant="outlined" label="Enter Password" fullWidth/>
          <button variant="container" className="p-2" color="primary">Create Account</button>
          </div>
          {/*<Divider variant="middle" />
         <p className="text-center">
              <link to="\Components\Navbar" className="text-black-r50">Already has an Account?</link>
     </p> */}
      </div>
      </div>

     ) 
   

};



export default signup;