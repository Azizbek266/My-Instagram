import React from 'react'
import "./style.css"

function Register() {
    return (
        <>
            <div className='body'>
                <div className="form">
                    <form action="" method="post">
                        <center>Register</center>
                        <div className="input">
                            <input type="text" placeholder='Username' />
                        </div>
                        <div className="input">
                            <input type="text" placeholder='Email' />
                        </div>
                        <div className="input">
                            <input type="text" placeholder='Password' />
                        </div>
                        <div className="input">
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register