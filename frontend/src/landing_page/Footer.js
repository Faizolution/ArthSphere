// import React from 'react';

// function Footer(){
//     return (
//         <footer style={{backgroundColor:"rgb(240,240,240)" }}>
//         <div className="container border-top mt-5" >
//             <div className="row mt-5">
//                 <div className="col">
//                     <img src="images/logo.svg" style={{ width: "50%" }}/>
//                     <p>© 2010 - 2026, Zerodha Broking Ltd.
//                     <br/>All rights reserved.</p>
//                 </div>
//                 <div className="col">
//                     <p> Company</p>
//                     <br/>
//                     <a href="#">About</a>
//                     <br/>
//                     <a href="#">Philosophy</a>
//                     <br/>
//                     <a href="#">Press & media</a>
//                     <br/>
//                     <a href="#">Careers</a>
//                     <br/>
//                     <a href="#">Zerodha Cares (CSR)</a>
//                     <br/>
//                     <a href="#">Zerodha.tech</a>
//                     <br/>
//                     <a href="#">Open source</a>
//                     <br/>
//                     <a href="#">Referral program</a>
//                     <br/>
//                 </div>
//                 <div className="col">
//                     <p> Support</p>
//                     <a href="#">Contact us</a>
//                     <br/>
//                     <a href="#">Support portal</a>
//                     <br/>
//                     <a href="#">How to file a complaint?</a>
//                     <br/>
//                     <a href="#">Status of your complaints</a>
//                     <br/>
//                     <a href="#">Bulletin</a>
//                     <br/>
//                     <a href="#">Circular</a>
//                     <br/>
//                     <a href="#">Z-Connect blog</a>
//                     <br/>
//                     <a href="#">Downloads</a>
//                     <br/>
//                 </div>
//                 <div className="col">
//                     <p> Account</p>
//                     <a href="#">Open demat account</a> 
//                     <br/>
//                     <a href="#">Minor demat account</a> 
//                     <br/>
//                     <a href="#">NRI demat account</a>
//                     <br/>
//                     <a href="#">HUF demat account</a>
//                     <br/>
//                     <a href="#">Commodity</a>
//                     <br/>
//                     <a href="#">Dematerialisation</a>
//                     <br/>
//                     <a href="#">Fund transfer</a>
//                     <br/>
//                     <a href="#">MTF</a><br/>
//                 </div>
//             </div>
//             <div className="mt-5 text-muted" style={{ fontSize: "16px"}}>
//            <p> Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
// <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

// <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

// <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

// <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>

// <p>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p>
//         </div>
//         </div>
//         </footer>
//     );
// }

// export default Footer;








import React from "react";

function Footer() {

    return (

        <footer
            className="bg-light border-top mt-5"
        >

            <div className="container py-5">

                <div className="row">

                    <div className="col-lg-3 col-md-6 col-12 mb-4">

                        <h3
                            className="fw-bold"
                            style={{
                                color: "#2563EB"
                            }}
                        >
                            ArthSphere
                        </h3>

                        <p className="text-muted">
                            AI Powered Trading
                            Platform.
                        </p>

                        <p className="text-muted">
                            © 2026 ArthSphere.
                        </p>

                    </div>

                    <div className="col-lg-3 col-md-6 col-12 mb-4">

                        <h5>Company</h5>

                        <p>About</p>
                        <p>Careers</p>
                        <p>Media</p>
                        <p>Blogs</p>

                    </div>

                    <div className="col-lg-3 col-md-6 col-12 mb-4">

                        <h5>Support</h5>

                        <p>Contact</p>
                        <p>Help Center</p>
                        <p>Downloads</p>
                        <p>FAQs</p>

                    </div>

                    <div className="col-lg-3 col-md-6 col-12 mb-4">

                        <h5>Products</h5>

                        <p>Stocks</p>
                        <p>Mutual Funds</p>
                        <p>Portfolio</p>
                        <p>AI Assistant</p>

                    </div>

                </div>

                <hr />

                <div className="text-center">

                    <small className="text-muted">

                        ArthSphere is a
                        demonstration stock trading
                        platform developed for
                        educational purposes.

                    </small>

                </div>

            </div>

        </footer>
    );
}

export default Footer;