import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className='container mx-auto py-10 my-10 text-center text-white bg-zinc-950'>
            <h1>This is Header, {user.name}</h1>
        </div>
    );
};

export default Header;