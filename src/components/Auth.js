import React, { Component } from 'react';
import authLogo from '../assets/auth_logo.png';

class Auth extends Component {
    constructor () {
        super();
        this.state = {
            userInput: ''
        }
    }

    handleChange ( val ) {
        this.setState({ userInput: val })
    }

    render () {
        return (
            <div className="auth">
                <img src={authLogo} alt="logo"/>
                <p>Username</p>
                <input className="username" onChange={(e) => this.handleChange(e.target.value)}/>
                <p>Password</p>
                <input className="password" onChange={(e) => this.handleChange(e.target.value)}/>
                <div>
                    <button className="login">Login</button>
                    <button className="register">Register</button>
                </div>
            </div>
        )
    }
}

export default Auth;