import React from 'react';

function Brokage(){
    return (
        <div className="container">
         <div className="row p-5 mt-5 text-center  border-top mt-5">
          <div className="col-md-8 p-4">
            <a href=" " style={{ textDecoration:"none"}} >
                <h3 className="fs-5 text-center">Brokerage calculator</h3> </a>

               <ul className="text-muted fs-6"  style={{ textAlign:"left", lineHeight:"2.5"}}>
               <li>Calculate brokerage charges for Equity Delivery trades.</li>
               <li>Estimate costs for Equity Intraday transactions.</li>
               <li>Compute brokerage and taxes for Equity Futures contracts.</li>
               <li>Analyze charges applicable to Equity Options trading.</li>
               <li>Calculate brokerage for Currency and Commodity Futures.</li>
               <li>Determine total trading costs, taxes, and net profit/loss before placing a trade.</li>
</ul>
            
          </div>

        <div className="col-md-4 p-4">
            <a href=" " style={{ textDecoration:"none"}} >
                <h3 className="fs-5">List of charges</h3>
            </a>
        </div>

    
    </div>

</div>
    ); 
}
export default Brokage; 