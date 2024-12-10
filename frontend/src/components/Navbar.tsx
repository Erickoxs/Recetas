
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className='navbar'>
            <Link to='#'>Home</Link>
            <Link to='/add-recipe'>Add Recipe</Link>
            <Link to='/favorites'>Favorites</Link>
            <Link to='/users'>Users</Link>
            <Link to='/register-users'>Register Users</Link>
        </nav>
    );
};

export default Navbar;
