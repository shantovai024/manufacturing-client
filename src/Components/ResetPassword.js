import React, { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from './Loading';

const ResetPassword = () => {

    let navigate = useNavigate()
    const emailRef = useRef("");

    const [sendPasswordResetEmail, sending, error] =
        useSendPasswordResetEmail(auth);

    if (sending) {
        return <Loading></Loading>;
    }
    
    let errorMessage;

    if (error) {
        errorMessage = (
            <p className="text-danger text-center">{error?.message}</p>
        );
    }



    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Email Sent! Please check your inbox");
            navigate('/login')
        }
    };

    return (
        <>
            <div className="reset-area py-16">
                <h2 className='text-4xl text-center'>Reset Your <span className='text-red-500'>Password!</span></h2>
                <form className='w-1/2 mx-auto mt-8'>
                    <input name='email' className='input input-bordered w-full  mb-4' type="email" ref={emailRef} placeholder='Enter Your Email' />
                    <button type='submit' onClick={handleResetPassword} className='btn btn-accent btn-md w-full mx-auto block mt-4'>Reset Now</button>
                </form>
                {errorMessage}
            </div>
        </>
    );
};

export default ResetPassword;