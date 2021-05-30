import React from 'react';


const Login = (props) => {

    if (!props.warn) {
        return null;
    }
    const HandleLoginExitOnClick = () => {
        props.LoginExitOnClick();
    }

    return(
            <div className="bg-blur">
                <div className="login-popup">
                    <img id="login-logo" src="/Logo.svg" alt="not available"></img>
                    <img id="exit" src="/exit-primary.svg" alt="not available" onClick={HandleLoginExitOnClick}></img>
                    <p className="login-h1">LOGIN</p>
                    <p className="input-label">Mobile No.</p>
                    <div className="input-groups">
                        <div className="input-group">
                            <div className="icon-label">+91</div>
                            <input type="text" id="mobile-no" name="mobile_no" pattern="[0-9]{10}" title="Mobile No." placeholder="9999999999" autoFocus/>
                        </div>
                        <p className="input-label" id="password-label">Password</p>
                        <div className="input-group">
                            <img className="icon-label" id="email-logo" src="" alt="not"></img>
                            <input type="password" id="password" name="password" title="password" />
                        </div>
                        <p className="forgotpassword-text">Forgot password?</p>
                        <div className="btn" id="login-btn">LOGIN/SIGN-UP</div>
                    </div>
                </div>
            </div>
    );
    
};

export default Login