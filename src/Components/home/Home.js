import React from "react";
import Sphoto from "./Sphoto.jpg";
import { FaChevronRight } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import "./Home.css";

const Home = () =>{
    return(
        <div>
           
         <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            Flub Waste 
            Bank
          </h1>
          <p className="hero-text">
            “If it can’t be reduced, reused, repaired, rebuilt, refurbished, refinished, resold, recycled,
			or composted, then it should be restricted, designed or removed from production.”
          <br /> – Pete Seeger, Folk Singer & Social Activist
          </p>
		  
		  <p className="hero-text">
            
		   
		   Flub Waste Bank incorporates all exercises essential to deal with the loss from its assortment to 
		   removal. Different practices include gathering, shipping, taking care of, observing, controlling, and disposing 
		   of waste and other legitimate procedures.
          </p>
		  
          <span className="group">
            <button className="btn">
              Start now{" "}
              <span className="right-arrow">
                <FaChevronRight />
              </span>
            </button>
            <div className="contact">
              Contact Us{" "}
              <span className="right-arrow">
                <FaChevronRight />
              </span>
            </div>
          </span>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone image" className="phone-img" />
        </article>
		 
      </div>
    </section>


	
        </div>
		
		);
   }	
      
export default Home;