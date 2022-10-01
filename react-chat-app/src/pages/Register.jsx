import React from 'react'
import Add from '../img/addAvatar.png';

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo"></span>
                <span className='title'>Register</span>
                <form action="">
                    <input type="text" placeholder='Display name' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input required style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default Register