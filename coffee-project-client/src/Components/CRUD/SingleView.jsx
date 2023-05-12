import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleView = () => {

    const coffee = useLoaderData();

    return (
        <div className='container mx-auto'>
            <div>
                <Link to={'/'} className='text-primary'>Home</Link>
            </div>
            <div className='w-2/4 mx-auto'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure style={{ width: '200px' }}><img src={coffee.photo} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {coffee.coffeeName}</h2>
                        <h2 className="card-title">Supplier: {coffee.supplier}</h2>
                        <h2 className="card-title">Taste: {coffee.taste}</h2>
                        <h2 className="card-title">A.Quantity: {coffee.availableQuantity}</h2>
                        <h2 className="card-title">See you again!</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleView;