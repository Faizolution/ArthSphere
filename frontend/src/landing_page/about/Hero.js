// import React from 'react';

// function Hero(){
//     return (
//         <div className="container">
//             <div className="row p-5 mt-5 mb-5">
//                 <h1 className="fs-2 text-center">
//                     We pioneered the discount broking model in India.
//                     <br/>
//                     Now, we are breaking ground with our technology.
//                 </h1>
//             </div>

//             <div className="row p-5 mt-5 border-top text-muted fs-6">
//                <div className="col-6 p-5">
//                <p  >We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.

//                <br/> <br/>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.

//                <br/><br/>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
//                </p>
//                </div>
//                 <div className="col-6 p-5 text-muted fs-6">
//                    <p>
//                    In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
//                    <br/> <br/>
//                   <a href="" style={{ textDecoration: "none"}}>Rainwatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
//                 <br/> <br/>
//                    And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.
//                   </p>
//                </div>
//             </div>
//         </div>
//     ); 
// }
// export default Hero; 

import React from 'react';

function Hero() {
  return (
    <div className="container">
      {/* Hero headline */}
      <div className="row mt-5 mb-5">
        <div className="col-12 text-center p-5 bg-white rounded shadow-sm">
          <h1 
  className="display-5 fw-semibold" 
  style={{ color: "#000000" }}  // lighter blue tone
>
  We pioneered the discount broking model in India.
</h1>

          <p className="lead text-success mt-3">
            Now, we are breaking ground with our technology.
          </p>
          <button className="btn btn-primary btn-lg mt-4">
            Get Started
          </button>
        </div>
      </div>

      {/* Two-column content */}
      <div className="row mt-5 border-top pt-5">
        <div className="col-md-6 p-4">
          <h3 className="fw-bold text-primary mb-3">Our Journey</h3>
          <p className="text-muted fs-6">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            <span className="fw-bold text-primary"> Zerodha</span>, a combination
            of Zero and "Rodha", the Sanskrit word for barrier.
          </p>
          <p className="text-muted fs-6">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India. Over 
            <span className="fw-bold text-success"> 1.6+ crore clients</span> 
            place billions of orders every year through our ecosystem, contributing 
            over 15% of all Indian retail trading volumes.
          </p>
        </div>

        <div className="col-md-6 p-4">
          <h3 className="fw-bold text-primary mb-3">Beyond Broking</h3>
          <p className="text-muted fs-6">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="text-muted fs-6">
            <a href="#" className="text-decoration-none text-primary fw-bold">
              Rainwatter
            </a>, our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p className="text-muted fs-6">
            And yet, we are always up to something new every day. Catch up on the
            latest updates on our blog, see what the media is saying about us, or
            learn more about our product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
