import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const SocialLogin = () => {
    let [signInWithGoogle, user, error] = useSignInWithGoogle(auth);

    let location = useLocation()
    let navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";

    if (user) {
        toast('SignIn with Google Successfully')
        navigate(from, { replace: true });
    }

    let errorMessage;
    if (error) {
        errorMessage = <p className="text-danger">{error?.message}</p>;
    }
    return (
        <>
            <div className="social-login">
                <h3 className='text-3xl mb-4 text-center mt-8'>Or Login with</h3>
                {errorMessage}
                <div className="google-auth-wrapper">
                <button onClick={() => signInWithGoogle()} className="google-btn-bg w-full d-flex justify-content-center">
                        <span className='logo-icon'> <img className='mr-3' src="https://img.icons8.com/color/48/000000/google-logo.png"  alt='' />Google </span>
                        
                    </button> 
                </div>
            </div>
        </>
    );
};

export default SocialLogin;