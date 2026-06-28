import React from 'react';

function Awards(){
    return (
       <div className='container mt-5'>
         <div className='row'>
            <div className='col-6 p-5'>
                <img src='images/largestBroker.svg' alt='Largest Broker' />
            </div>
            <div className='col-6 p-5 mt-1'>
              <h1>Largest stock broker in India </h1>
              <p className='mb-5'>2+ million zerodha clients contribut to over 15% of all voluemn in india daily by trading and investing in </p>
              
              <div className='row'>
                <div className='col-6'>
                    <ul>
                <li>
                    <p>Futures and options </p>
                </li>
                <li>
                    <p>Comodity and derivatives  </p>
                </li>
                <li>
                    <p>currency derivatives </p>
                </li>
              </ul>
                </div>
                <div className='col-6'>
                    <ul>
                <li>
                    <p>Stock and IOPs </p>
                </li>
                <li>
                    <p>Direct mutul funds  </p>
                </li>
                <li>
                    <p>Bonds and Grow </p>
                </li>
              </ul>
                </div>
              </div>
              <img src='images\pressLogos.png' alt='press logo' style={{width:"70%"}}></img>
            </div>
         </div>
       </div>
    );

}
export default Awards;