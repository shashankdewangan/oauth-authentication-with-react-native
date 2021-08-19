import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "956376274559-8473n7uuqn48rfhm4h4u02f5bpbbp69k.apps.googleusercontent.com";

function Login() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    
    const onLoginSuccess = (res) => {
       
        //if the login sucess
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };
    
    //if the login failed 
    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };
    
    //signout sucess
    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId= {clientId}
                    buttonText="Sign In"
                    onSuccess= {onLoginSuccess}
                    onFailure= {onLoginFailure}
                    cookiePolicy= {'single_host_origin'}
                    isSignedIn= {true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId= {clientId}
                    buttonText= "Sign Out"
                    onLogoutSuccess= {onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    );
}
export default Login;