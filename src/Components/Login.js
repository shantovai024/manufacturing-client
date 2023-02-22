import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {  useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from './Loading';
import SocialLogin from './SocialLogin';

const Login = () => {

    let [signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    let location = useLocation();
    let navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";
    if (location.state?.from) {
        navigate(location.state.from)
    }

    useEffect(() => {
        if (user) {
            toast("Login Successfully");
            navigate(from, { replace: true });
        }
    }, [from, navigate, user]);

    if (loading) {
        return <Loading></Loading>
    }

    let loginToSignUp = (event) => {
        navigate('/signup')
    }

    let resetpassword = (event) => {
        navigate('/resetpassword')
    }

    let errorMessage;
    if (error) {
        errorMessage = <p className="text-danger">{error?.message}</p>;
        console.log(error);
    }

    let handleLogin = async (event) => {
        event.preventDefault()

        let email = event.target.email.value;
        let password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
    }

    return (
        <>
            <div className="login-area py-16 ">
                <h2 className='text-4xl text-center mb-8'>Login</h2>
                <div className="login-wrap w-1/2 mx-auto">
                    <form onSubmit={handleLogin}>
                        <input name='email' className='input input-bordered w-full  mb-4' type="email" placeholder='Enter Your Email' /> <br />
                        <input name='password' className='input input-bordered w-full  mb-4' type="password" placeholder='Enter Your Password' /> <br />
                        <button type='submit' className='login-btn btn btn-md btn-accent w-full mb-8'>Login</button>
                    </form>
                    {errorMessage}
                    <div className="reset-option">
                        <p className='text-center'>Forget Your Password? <span onClick={resetpassword} className='sign-up-route text-danger'><strong className='text-red-500 reset'>Reset</strong></span> Now</p>
                    </div>
                    <div className="register-option">
                        <p className='text-center'>Don't have an account? <span onClick={loginToSignUp} className='sign-up-route text-primary'><strong className='text-green-500 register'>SignUp</strong></span> Now</p>
                    </div>
                    <SocialLogin/>
                </div>
            </div>
        </>
    );
};

export default Login;