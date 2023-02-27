import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    return (
        <>
            <h2 className='text-center text-2xl mt-8'>My Profile</h2>
            <div className="mt-8 w-1/2 mx-auto my-profile drop-shadow-lg bg-slate-200 text-black p-5 rounded-xl">
                <p className='text-2xl'><b>Name:</b> {user?.displayName}</p>
                <p className='text-2xl'><b>Email:</b> {user?.email}</p>
                <p className='text-2xl'><b>Phone:</b> {user?.phone || "n/a"}</p>
                <p className='text-2xl'><b>Education:</b> {user?.education || "n/a"}</p>
                <p className='text-2xl'><b>Location:</b> {user?.loaction || "n/a"}</p>
                <p className='text-2xl'><b>Linkedin:</b> {user?.linkedin || "n/a"}</p>

            </div>
        </>
    );
};

export default MyProfile;