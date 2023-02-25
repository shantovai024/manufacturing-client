import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';

const Purchase = () => {
    let { id } = useParams();
    let [parts, setParts] = useState({})

    const [user, loading] = useAuthState(auth);

 /*    let {name,  supplierName, description, minOrder, price, quantity, img} = parts;

    useEffect(() => {
        let url = `https://manufacturing-server-phi.vercel.app/allproducts/${id}`
        fetch(url)
            .then((res) => res.json())
            .then((data) => setParts(data))
    }) */

    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    

    let handleInputChange = event => {
        const value = event.target.value;
    
        if (value < 10) {
          setErrorMessage("Please order minimum Quantity");
        } else if (value > 20) {
          setErrorMessage("Out of Quantity!");
        } else {
          setErrorMessage("");
        }
    
        setInputValue(value);
      }

      const isInputValid = inputValue >= 10 && inputValue <= 20;

    return (
        <div>
            <h2>This is Purchase PAge</h2>
            {/* <h2>{name}</h2> */}
            <div className="purchase-form mx-auto w-1/2 mt-16 mb-16">
                <form>
                    <input className='input input-bordered w-full  mb-4' type="text" value={user.displayName} disabled /> <br />
                    <input className='input input-bordered w-full  mb-4' type="email" value={user.email} disabled /> <br />
                    <input className='input input-bordered w-full  mb-4' type="number" value={inputValue} onChange={handleInputChange} /> <br />
                    <p className='text-red-400 mb-2'>{errorMessage}</p>
                    <input className='input input-bordered w-full  mb-4' type="text" placeholder='Enter Your Address' /> <br />
                    <input className='input input-bordered w-full  mb-4' type="number" placeholder='Enter Your Number' /> <br />
                    <textarea className='textarea textarea-accent w-full mb-4' name="" id=""  placeholder='Enter Your Message'></textarea>
                    <button className='btn btn-accent btn-lg' disabled={!isInputValid}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Purchase;