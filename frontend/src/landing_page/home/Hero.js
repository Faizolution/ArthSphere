// import React from 'react';

// function  Hero(){
//     return (
//         <div className='container p-5 mb-5'>
//             <div className='row text-center'>
//                 <img
//           src="images/homeHero.png"
//           alt="Zerodha Hero Section"
//           className= 'mb-5'
//         />
//         <h1 className='mt-5 text-muted'>Trade Smarter.
// <br></br>Build Wealth Faster.
// <br/>
// Your personal stock trading and portfolio
// <br/>management platform powered by real-time analytics.</h1>
//         <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. </p>
        
//         <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}}>Signup</button>

//             </div>
//         </div>
//     ); 
// }
// export default Hero;


import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        {/* Left Section */}
        <div className="col-lg-6 col-md-12 text-center text-lg-start">

          <h1
            className="display-4 fw-bold"
            style={{
              color: "#1E3A8A",
              lineHeight: "1.3"
            }}
          >
            Trade Smarter.
            <br />
            Build Wealth Faster.
          </h1>

          <p
            className="lead text-muted mt-4"
          >
            Your personal stock trading and
            portfolio management platform
            powered by real-time analytics.
          </p>

          <p className="text-secondary">
            Invest in stocks, derivatives,
            mutual funds, ETFs, bonds,
            and much more.
          </p>

          <Link
            to="/signup"
            className="btn btn-primary btn-lg mt-3 px-5"
          >
            Get Started
          </Link>

        </div>

        {/* Right Section */}
        <div className="col-lg-6 col-md-12 text-center mt-5 mt-lg-0">

          <img
            src="images/homeHero.png"
            alt="Trading Dashboard"
            className="img-fluid hero-image"
          />

        </div>

      </div>

    </div>
  );
}

export default Hero;