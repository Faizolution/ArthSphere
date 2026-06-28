import React from 'react';

function Hero(){
    return (
<div className="container">
    {/* <div className="row text-center mt-5 border-bottom pb-5">
        <div className="col-12">
            <h1>Pricing</h1>
            <h3 className="text-muted fs-5 mt-3">
                List of all charges and taxes
            </h3>
        </div>
    </div> */}

{/* additional */}

<div className="row text-center mt-5 border-bottom pb-5">
  <div className="col-12">
    <h1 
  className="display-4 fw-semibold" 
  style={{ color: "#212529" }}  // Bootstrap’s default black/gray
>
  Pricing
</h1>
    <h3 className="text-muted fs-5 mt-3">
      List of all charges and taxes
    </h3>
    <p className="mt-3 text-secondary">
      Transparent, simple, and fair pricing designed for every investor.
    </p>
    <button className="btn btn-outline-primary btn-lg mt-4">
      View Detailed Charges
    </button>
  </div>
</div>



    {/* Pricing Cards */}
    <div className="row text-center  border-bottom mt-5">

        <div className="col-md-4 p-4">
            <img src="images/pricingEquity.svg" alt="Equity Delivery" />
            <h2 className="fs-4 mt-4">Free equity delivery</h2>
            <p className="text-muted">
                All equity delivery investments (NSE, BSE) are absolutely free —
                ₹0 brokerage.
            </p>
        </div>

        <div className="col-md-4 p-4">
            <img src="images/intradayTrades.svg" alt="Intraday Trades" />
            <h2 className="fs-4 mt-4">Intraday and F&O trades</h2>
            <p className="text-muted">
                Flat ₹20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity segments.
                Flat ₹20 on all option trades.
            </p>
        </div>

        <div className="col-md-4 p-4">
            <img src="images/pricingEquity.svg" alt="Mutual Funds" />
            <h2 className="fs-4 mt-4">Free direct MF</h2>
            <p className="text-muted">
                All direct mutual fund investments are absolutely free —
                ₹0 commissions & DP charges.
            </p>
        </div>

    </div>

</div>
    ); 
}
export default Hero; 









