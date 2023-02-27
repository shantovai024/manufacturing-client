import React from 'react';

const MyOrders = () => {
    return (
        <div >
            <table className='table-auto mt-12 mx-auto text-black'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total Amount</th>
                        <th>Status</th>
                        <th>transaction Id</th>
                        <th>Pay</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default MyOrders;