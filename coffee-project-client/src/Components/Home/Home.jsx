import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Home = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className='container mx-auto my-10 py-10 bg-neutral-300 text-center'>
            <h1>Welcome, {user.name} To this React World</h1>
        </div>
    );
};

export default Home;