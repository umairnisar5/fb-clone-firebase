import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTtypes } from "./reducer";
import { useStateValue } from './StateProvider';

function Login() {

    const [state, dispatch] = useStateValue();
 
    const signIn = () => {
        // sigh in
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type: actionTtypes.SET_USER,
                user: result.user,
            })
        }).catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png" alt="" />
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;
