import React from 'react';
import { Link } from 'react-router-dom';

function Login(){
    return(
        <>
        <h1>Login component</h1><br />

        <Link to="/login">Register</Link>
        <br />

        <Link to="/product-list">Login</Link>
        <br />

        <Link to="/register">ProductList</Link>

        </>
    );
}

export default Login;