import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const [isLoading, setIsLoading] = useState(true);
    // const [user, setUser] = useState({});
    const location = useLocation();
    const { signInUsingGoogle } = useAuth();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                // setUser(result.user);
                history.push(redirect_uri)
            })
            .finally(() => setIsLoading(false));
    }




    return (
        <div className="login-items">
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;