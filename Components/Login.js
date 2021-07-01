import {React, useState} from 'react';
import { useRouter } from 'next/router';

const Login = (props) => {
    const router = useRouter()
    const[login, setLogin] = useState(true)
    const [mobileerror, setMobileerror] = useState(false)
    const [passworderror, setPassworderror] = useState(false)

    if (!props.warn) {
        return null;
    }
    const HandleLoginExitOnClick = () => {
        props.LoginExitOnClick();
    }

    const loginclasses = () => {
        if (login == true){
            return "";
        } else {
            return "fadedloginbtn"
        }
    }

    const signupclasses = () => {
        if (login == true){
            return "fadedloginbtn"
        } else {
            return ""
        }
    }

    const loginclick = () => {
        setLogin(true)
    }

    const signupclick = () => {
        setMobileerror(false)
        setPassworderror(false)
        setLogin(false)
    }

    const registerUser = async event => {
        event.preventDefault()
        var eventusername = String(event.target.username.value) + '01';
        var eventpassword = String(event.target.password.value);
        var eventname = String(event.target.name.value);

        const res = await fetch(
            'http://127.0.0.1:8000/api/patient/',
            {
            body: JSON.stringify({
                username: eventusername,
                mobile_no: event.target.username.value,
                password: eventpassword,
                name: eventname,
                clinic: "http://127.0.0.1:8000/api/clinic/1/",
                is_patient: true
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST'
            }
        )
        const result = await res.json()
        

        if (result.error){
            setMobileerror(false)
            setPassworderror(false)
            if (result.error == "mobile no. doesnt exists") {
                setMobileerror(true)
            }
            if (result.error == "Incorrect password") {
                setPassworderror(true)
            }
        } else {
            if (result.is_patient == true && result.is_doctor == false){
                window.location = "http://localhost:3000/dashboard?token=" + result.token;
            }
            if (result.is_doctor == true && result.is_patient == false){
                window.location = "http://localhost:3000/dashboard?token=" + result.token;
            }
        }
    }

    const loginUser = async event => {
        event.preventDefault()

        var eventusername = String(event.target.username.value) + '01';
        var eventpassword = String(event.target.password.value);
        const formdata = new FormData()
        formdata.append("username", eventusername)
        formdata.append("password", eventpassword)
    
        const res = await fetch(
            'http://127.0.0.1:8000/api/clinic/login/',
            {
                body: formdata,
                method: 'POST'
            }
        )
    
        const result = await res.json()

        console.log(result)
        if (result.error){
            setMobileerror(false)
            setPassworderror(false)
            if (result.error == "mobile no. doesnt exists") {
                setMobileerror(true)
            }
            if (result.error == "Incorrect password") {
                setPassworderror(true)
            }
        } else {
            if (result.user.is_patient == true && result.user.is_doctor == false){
                window.location = "http://localhost:3000/dashboard?token=" + result.user.token;
            }
            if (result.user.is_doctor == true && result.user.is_patient == false){
                window.location = "http://localhost:3000/dashboard?token=" + result.user.token;
            }
        }
    }

    return(
            <div className="bg-blur">
                <div className="login-popup">
                    <div className="login-exit"><img id="exit" src="/exit-primary.svg" alt="not available" onClick={HandleLoginExitOnClick}></img></div>
                    <div className="login-logo"><img src="/Logo.svg" alt="not available"></img></div>
                    <div className="btngrp">
                        <div className={"loginbtn" + ' ' + loginclasses()} onClick={loginclick}>LOGIN</div>
                        <div className={"loginbtn" + ' ' + signupclasses()} onClick={signupclick}>SIGN UP</div>
                    </div>
                    { passworderror ? <div className={"alertbox" + ' ' + "btn"} style={{ width: "75%", marginLeft: "auto", marginRight:"auto" }}>Invalid Password</div> : ""}
                    { mobileerror ? <div className={"alertbox" + ' ' + "btn"} style={{ width: "75%", marginLeft: "auto", marginRight:"auto" }}>Mobile No. Doesn't exists.. Please Sign Up</div> : ""}
                    <form onSubmit={login ? loginUser : registerUser} method="POST">
                    <div className="input-groups">
                        <p className="input-label">Mobile No.</p>
                        <div className="input-group">
                            <div className="icon-label">+91</div>
                            <input type="text" id="mobile-no" name="username" pattern="[0-9]{10}" title="Mobile No." placeholder="9999999999" autoFocus/>
                        </div>
                        { login ? '':<div><p className="input-label">Name</p> <div className="input-group">
                                        <div className="icon-label"><div className="password-logo"><img src="" alt="not"></img></div></div>
                                        <input type="text" id="name" name="name" title="name" minLength="3" />
                                    </div></div> }
                        <p className="input-label" id="password-label">Password</p>
                        <div className="input-group">
                            <div className="icon-label"><div className="password-logo"><img src="" alt="not"></img></div></div>
                            <input type="password" id="password" name="password" title="password" />
                        </div>
                        <input type="submit" className="btn" value={login ? 'LOGIN' : 'SIGN UP'} />
                    </div>
                    </form>
                </div>
            </div>
    );
    
};

export default Login