import React, { useContext, useState } from 'react';
import './Home.css';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Home = () => {

    const loadedCoffee = useLoaderData();

    const [coffee, setCoffee] = useState(loadedCoffee);

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remaining = coffee.filter(item => item._id !== id);
                            setCoffee(remaining);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                        }
                        console.log(data)
                    })
                    .catch(err => console.log(err => err.message))
            }
        })
    }

    return (
        <div className='container mx-auto my-10 py-10 bg-neutral-300 text-center'>
            <h1>Our Popular Products ({coffee.length})</h1><br />
            <div>
                <Link to={'/addCoffee'} className='text-primary'>Add New Coffee</Link>
            </div>
            <div className='cardContainer'>
                {
                    coffee.map((item, index) => <div key={index}>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure style={{ width: '200px' }}><img src={item.photo} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Name: {item.coffeeName}</h2>
                                <h2 className="card-title">Supplier: {item.supplier}</h2>
                                <h2 className="card-title">Taste: {item.taste}</h2>
                            </div>
                            <div className='me-10'>
                                <Link to={`/coffee/${item._id}`} className='text-info'>View</Link><br /><br />
                                <Link to={`/updateCoffee/${item._id}`} className='text-warning'>Edit</Link><br /><br />
                                <Link className='text-error' onClick={() => handleDelete(item._id)}>Delete</Link>
                            </div>
                        </div>
                    </div>)
                }

            </div>

        </div>
    );
};

export default Home;