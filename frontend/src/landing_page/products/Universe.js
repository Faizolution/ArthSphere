import React from 'react';

function Universe(){
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha Universe
</h1>
<p className="text-center">Extend your trading and investment experience even further with our partner platforms
</p>
            
                <div className="col-4 p-3 mt-5">
                    <img src="images/smallcaseLogo.png"/>
                    <p className="text-small text-muted">Thematic investing platform</p>
                </div>
                 <div className="col-4 p-3 mt-5">
                    <img src= "images/goldenpiLogo.png"/>
                    <p className="text-small text-muted">Investment reseach platform</p>
                </div>
                 <div className="col-4 p-2 mt-5">
                    <img src="images/dittoLogo.png" style={{
            height: "50px",
            width: "180px",
            objectFit: "contain",
            display: "block",
            margin: "0 auto"
        }} />
                    <p className="text-small text-muted">Personalised advice on life and health insurance</p>
                </div>
                 <div className="col-4 p-3 mt-5">
                    <img src="images/sensibullLogo.svg" />
                    <p className="text-small text-muted">Options Trading platform</p>
                </div>
                 <div className="col-4 p-3 mt-5">
                    <img src="images/streakLogo.png" style={{
            height: "60px",
            width: "180px",
            objectFit: "contain",
            display: "block",
            margin: "0 auto"
        }} />
                    <p className="text-small text-muted">Systematic Trading platform</p>
                </div>
                 <div className="col-4 p-3 mt-5">
                    <img src="images/zerodhaFundhouse.png" style={{
            height: "60px",
            width: "180px",
            objectFit: "contain",
            display: "block",
            margin: "0 auto"
        }} />
                    <p className="text-small text-muted">Our Asset Management venture</p>
                </div>
                <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}}>Signup</button>
            </div>
        </div>
    ); 
}
export default Universe; 