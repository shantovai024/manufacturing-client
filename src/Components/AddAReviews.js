import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const AddAReviews = () => {
    const [user] = useAuthState(auth)

    let handleReview = event => {
        event.preventDefault();
        event.target.reset()
        toast.success("Review Successfully")
    }

    return (
        <>
            <div className="add-review mx-auto w-1/2 mt-8">
                <h2 className='text-center text-3xl mb-8'>My Review</h2>
                <p className='text-xl'><b>Name:</b> {user.displayName}</p>
                <p className='text-xl'><b>Email:</b> {user.email}</p>
                <h3 className='text-xl mb-2 mt-4'>Rate Our Product: </h3>
                
                <div class="rating  block" required>
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" value="1" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" value="2" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" value="3" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" value="4" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" value="5" />
                </div>

                <h3 className='text-xl mt-4'>Comment On Us:</h3>

                <form onSubmit={handleReview}>
                    <textarea className='bg-slate-100 text-black mt-4 mb-2 p-4 rounded' name="text" id="" cols="30" rows="10" placeholder='Write Your Comment'></textarea> <br />
                    <button type='submit' className='btn btn-accent'>Send</button>
                </form>
            </div>

        </>
    );
};

export default AddAReviews;