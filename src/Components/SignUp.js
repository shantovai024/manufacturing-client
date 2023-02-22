import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from './Loading';
import SocialLogin from './SocialLogin';

const SignUp = () => {

    let location = useLocation()
    let navigate = useNavigate();

    let [agree, setAgree] = useState(false);

    let [createUserWithEmailAndPassword,
        user,
        error,
        loading
    ] = useCreateUserWithEmailAndPassword(auth);

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger text-center'>{error?.message}</p>
    }

    let from = location.state?.from?.pathname || "/login";
    useEffect(() => {
        if (user) {
            toast('SignUp Successful')
            navigate(from, { replace: true });
        }
    }, [from, navigate, user]);

    if (loading) {
        return <Loading></Loading>
    }


    let signUpToLogin = event => {
        navigate('/login')
    }

    let handleSignup = event => {
        event.preventDefault()

        let name = event.target.name.value;
        let number = event.target.number.value;
        let email = event.target.email.value;
        let password = event.target.password.value;
        if (agree) {
            createUserWithEmailAndPassword(email, password)
        }
    }

    return (
        <>
            <div className="login-area py-16 ">
                <h2 className='text-4xl text-center mb-8'>Sign Up</h2>
                <div className="login-wrap w-1/2 mx-auto">
                    <form onSubmit={handleSignup}>
                        <input name='name' className='input input-bordered w-full  mb-4' type="text" placeholder='Enter Your Name' /> <br />
                        <input name='number' className='input input-bordered w-full  mb-4' type="number" placeholder='Enter Phone Number' /> <br />
                        <input className='input input-bordered w-full  mb-4' name='email' type="email" placeholder='Enter Your Email' /> <br />
                        <input className='input input-bordered w-full  mb-4' name='password' type="password" placeholder='Enter Your Password' /> <br />
                        <button onClick={() => setAgree(!agree)} type='submit' className='login-btn btn btn-md btn-accent w-full mb-8'>Sign Up</button>
                    </form>
                    {errorMessage}
                    <div className="register-option">
                        <p className='text-center'>Already have an account? <span onClick={signUpToLogin} className='sign-up-route text-primary'><strong className='text-green-500 register'>Login</strong></span> Now</p>
                    </div>
                    <SocialLogin/>
                </div>
            </div>
        </>
    );
};

export default SignUp;