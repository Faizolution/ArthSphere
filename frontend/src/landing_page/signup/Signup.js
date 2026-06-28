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

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:3002/api/auth/register",
                user
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            alert("Signup Successful");

            window.location.href =
                "http://localhost:3001";

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Signup Failed"
            );
        }
    };

    return (

        <div className="container mt-5">

            <div
                className="card p-4 shadow mx-auto"
                style={{ maxWidth: "450px" }}
            >

                <h2 className="text-center mb-4">
                    Open your account
                </h2>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label>
                            Name
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

                        <label>
                            Email
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

                    <div className="mb-3">

                        <label>
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
                        className="btn btn-primary w-100"
                    >
                        Sign Up
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Signup;