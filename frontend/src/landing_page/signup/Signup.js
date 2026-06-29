// import React from 'react';

// function Signup(){
//     return (
//         <h1>Signup</h1>
        
//     ); 
// }
// export default Signup; 


import React, { useState } from "react";
import axios from "axios";

function Signup() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoading(true);

        try {

            const response = await axios.post(
                "https://arthsphere-backend-33ul.onrender.com/api/auth/register",
                user
            );

            // save token if backend returns one
            if (response.data.token) {
                localStorage.setItem(
                    "token",
                    response.data.token
                );
            }

            // save user if backend returns one
            if (response.data.user) {
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );
            }

            alert("Signup Successful!");

            // redirect to dashboard
            // window.location.href = "http://localhost:3001";
            window.location.href =
  "https://arthsphere-dashboard.onrender.com";

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Signup Failed"
            );
        }

        setLoading(false);
    };

    return (
        <div className="container mt-5 mb-5">

            <div
                className="card shadow-lg p-4 mx-auto border-0"
                style={{
                    maxWidth: "450px",
                    borderRadius: "20px"
                }}
            >

                <h2 className="text-center fw-bold mb-3">
                    Create Your Account
                </h2>

                <p className="text-center text-muted mb-4">
                    Start investing smarter with ArthSphere
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">
                            Full Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Email Address
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100 py-2"
                        disabled={loading}
                    >
                        {loading ? "Creating Account..." : "Sign Up"}
                    </button>

                </form>

            </div>
        </div>
    );
}

export default Signup;