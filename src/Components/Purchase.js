import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const Purchase = () => {

  let handlePurchase = (event) => {
    event.preventDefault()
    toast.success("Thanks for Purchase")
  }

  let { id } = useParams();
  let [part, setPart] = useState({})

  const [errorMessage, setErrorMessage] = useState("");

  const [user] = useAuthState(auth);
  let { name, supplierName, description, minOrder, price, quantity, img } = part;

  useEffect(() => {
    let url = `https://manufacturing-server-ten.vercel.app/purchase/${id}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data))
  })

  let handleInputChange = event => {

    let partsQuantity = event.target.value
    if (minOrder > partsQuantity) {
      setErrorMessage("Please order minimum Quantity");
    } else if (partsQuantity > quantity) {
      setErrorMessage("Out of Quantity!");
    } else {
      setErrorMessage("");
    }
  }

  return (
    <>
      <div className="purchase-form mx-auto w-full p-5 lg:p-0 lg:w-1/2 mt-16 mb-16">
        <div className="purchase-info">
          <img className='mb-4' src={img} alt="" />
          <p className='text-2xl mb-2'><b>Name: </b>{name}</p>
          <p className='text-2xl mb-2'><b>Brand: </b>{supplierName}</p>
          <p className='text-xl mb-4'><b>Des: </b>{description}</p>
          <p className='text-xl mb-2'><b>Min Order: </b>{minOrder}</p>
          <p className='text-xl mb-2'><b>Quantity: </b>{quantity}</p>
          <p className='text-xl mb-6'><b>Price: </b>{price}</p>

        </div>
        <form onSubmit={handlePurchase}>
          <input required className='input input-bordered w-full mb-4' type="text" value={user?.displayName} disabled /> <br />
          <input required className='input input-bordered w-full mb-4' type="email" value={user?.email} disabled /> <br />

          <input required className='input input-bordered w-full mb-4' name='partsQuantity' type="number" onChange={handleInputChange} defaultValue={minOrder} /> <br />

          <p className='text-red-400 mb-2'>{errorMessage}</p>
          <input required className='input input-bordered w-full mb-4' type="text" placeholder='Enter Your Address' /> <br />
          <input required className='input input-bordered w-full mb-4' type="number" placeholder='Enter Your Phone Number' /> <br />
          <textarea required className='textarea textarea-accent w-full mb-4' name="" id="" placeholder='Enter Your Message'></textarea>
          <button className='btn btn-accent btn-lg'>Send</button>
        </form>
      </div>
    </>
  );
};

export default Purchase;