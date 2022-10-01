import React from 'react'

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo"></span>
                <span className='title'>Login</span>
                <form action="">
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button>Log in</button>
                </form>
                <p>You don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login
