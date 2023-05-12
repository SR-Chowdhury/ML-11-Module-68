import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const coffeeName = form.coffeeName.value;
        const availableQuantity = form.availableQuantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const photo = form.photo.value;
        const formData = { coffeeName, availableQuantity, supplier, taste, photo };
        console.log(formData);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Added!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
            .catch()
    }



    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-xl'>Add a Coffee</h1><br />
            <hr />
            <div className=''>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-12">

                        <div className="">

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Coffe Name</label>
                                    <div className="mt-2">
                                        <input type="text" name="coffeeName" id="coffee-name" className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1" />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Available Quantity</label>
                                    <div className="mt-2">
                                        <input type="text" name="availableQuantity" id="first-name" className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1" />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Supplied</label>
                                    <div className="mt-2">
                                        <input type="text" name="supplier" id="supplier" className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1" />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Taste</label>
                                    <div className="mt-2">
                                        <input type="text" name="taste" id="taste" className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1" />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Photo URL</label>
                                    <div className="mt-2">
                                        <input type="text" name="photo" id="photo" className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1" />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                        <button type="submit" className="rounded-md bg-indigo-600 px-10 py-3 text-lg font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddCoffee;