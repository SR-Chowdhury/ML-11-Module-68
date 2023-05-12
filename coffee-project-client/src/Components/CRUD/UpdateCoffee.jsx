import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const coffeeName = form.coffeeName.value;
        const availableQuantity = form.availableQuantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const photo = form.photo.value;
        const formData = { coffeeName, availableQuantity, supplier, taste, photo };
        console.log(formData);

        fetch(`http://localhost:5000/coffee/${coffee._id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Updated!',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
                console.log(data)
            })
            .catch(err => console.log(err.message))
    }



    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-xl'>Update a Coffee</h1><br />
            <hr />
            <Link to={'/'} className='text-primary'>Home</Link>
            <div className=''>
                <form onSubmit={handleUpdate}>
                    <div className="space-y-12">

                        <div className="">

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Coffe Name</label>
                                    <div className="mt-2">
                                        <input type="text" defaultValue={coffee?.coffeeName} name="coffeeName" id="coffee-name" className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1" />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Available Quantity</label>
                                    <div className="mt-2">
                                        <input type="text" defaultValue={coffee?.availableQuantity} name="availableQuantity" id="first-name" className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1" />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Supplier</label>
                                    <div className="mt-2">
                                        <input type="text" defaultValue={coffee?.supplier} name="supplier" id="supplier" className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1" />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Taste</label>
                                    <div className="mt-2">
                                        <input type="text" defaultValue={coffee?.taste} name="taste" id="taste" className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1" />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Photo URL</label>
                                    <div className="mt-2">
                                        <input type="text" defaultValue={coffee?.photo} name="photo" id="photo" className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1" />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Link to={`/`}><button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button></Link>
                        <button type="submit" className="rounded-md bg-indigo-600 px-10 py-3 text-lg font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdateCoffee;