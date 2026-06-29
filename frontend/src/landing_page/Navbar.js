// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {

//     return (

//         <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">

//             <div className="container">

//                 <Link
//                     className="navbar-brand fs-3 fw-bold"
//                     to="/"
//                     style={{
//                         background:
//                             "linear-gradient(90deg,#1E3A8A,#2563EB)",
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "transparent",
//                         letterSpacing: "2px",
//                         textTransform: "uppercase",
//                     }}
//                 >
//                     <i
//                         className="fa fa-line-chart me-2"
//                     ></i>

//                     ArthSphere
//                 </Link>

//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarNav"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div
//                     className="collapse navbar-collapse"
//                     id="navbarNav"
//                 >
//                     <ul className="navbar-nav ms-auto">

//                         <li className="nav-item">
//                             <Link
//                                 className="nav-link"
//                                 to="/signup"
//                             >
//                                 Signup
//                             </Link>
//                         </li>

//                         <li className="nav-item">
//                             <Link
//                                 className="nav-link"
//                                 to="/about"
//                             >
//                                 About
//                             </Link>
//                         </li>

//                         <li className="nav-item">
//                             <Link
//                                 className="nav-link"
//                                 to="/product"
//                             >
//                                 Products
//                             </Link>
//                         </li>

//                         <li className="nav-item">
//                             <Link
//                                 className="nav-link"
//                                 to="/pricing"
//                             >
//                                 Pricing
//                             </Link>
//                         </li>

//                         <li className="nav-item">
//                             <Link
//                                 className="nav-link"
//                                 to="/support"
//                             >
//                                 Support
//                             </Link>
//                         </li>

//                     </ul>
//                 </div>

//             </div>

//         </nav>
//     );
// }

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div className="container">
        <Link
          className="navbar-brand fs-3 fw-bold"
          to="/"
          style={{
            background: "linear-gradient(90deg,#1E3A8A,#2563EB)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          <i className="fa fa-line-chart me-2"></i>
          ArthSphere
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>

            {/* 🚀 Dashboard Button */}
            <li className="nav-item">
              <a
                className="nav-link btn btn-primary text-white px-3 ms-2"
                href="https://arthsphere-dashboard.onrender.com"
                target="_blank"
                rel="noreferrer"
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
