/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import M from 'materialize-css';

//this is our signin component
const Login = () => {

    //creating hook
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const PostData = () => {

        //email validation using regex
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Invalid email id", classes: "#e53935 red darken-1" });
            return;
        }
        //password validation using regex
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)) {
            M.toast({ html: "Invalid password", classes: "#e53935 red darken-1" });
            return;
        }

        M.toast({ html: "Logged in Successfully", classes: "#e53935 red darken-1" });
        return;

    }

    return (

        <div className="card signin-card">
            <img src='https://res.cloudinary.com/tushar-mittal1998/image/upload/v1639674425/login_page_1_ewzxso.png' alt='smart-serve-logo' />
            <input
                type="text"
                className="placeicon"
                placeholder="username"
                val={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                className="placeicon"
                placeholder="Password"
                val={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn waves-effect waves-light #42a5f5 blue darken-1"
                onClick={() => PostData()}
            >
                Sign In
            </button>
            <p >
                <a className='forgot-password' href="mailto: abc@example.com">Forgot password?</a>
            </p>
        </div>

    )
}

export default Login