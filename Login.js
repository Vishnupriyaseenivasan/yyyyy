import React from "react";
import './Login.css';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="Login">
            <div className='LoginHeader'>
                <img src='logo.png' />
            </div>
            <div className='LoginBody'>
                <div className='AboutLogin'>
                    <h2>Welcome to</h2>
                    <h1>Crystal Delta</h1>
                    <h2>Banking</h2>
                </div>
                <div className='LoginBox'>
                    <h3>Login to your account</h3>
                    {/* <form method='post'> */}
                        <label for="txtCustomerID">Customer ID</label>
                        <input className="txt" type="text" id='txtCustomerID' />
                        <label for="txtPassword">Password</label>
                        <input className="txt" type="password" id='txtPassword' />
                        <Link className="nounderline" to={'/Dashboard'}>
                            <button className="loginbtn" type="submit">Login</button>
                        </Link>
                    {/* </form> */}
                </div>
            </div>
      </div>
    );
}

export default Login;