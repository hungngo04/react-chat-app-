import React from 'react'

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat app</span>
                <span className='title'>Register</span>
                <form action="">
                    <input type="text" placeholder='Display name' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input type="file"/>
                    <button>Sign up</button>
                </form>
                <p>Do not have an account? Login</p>
            </div>
        </div>
    )
}

export default Register