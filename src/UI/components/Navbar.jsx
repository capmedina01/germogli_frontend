import React from 'react';
import { ItemsNavbar } from './ItemsNavbar';

export const Navbar = () => {
    return (
        <nav className='flex space-x-4 bg-gray-800 p-4'>
            <h1 className='text-white'>App</h1>
            <ul className='flex space-x-4'>
                <ItemsNavbar text='Inicio' link='/' />
                <ItemsNavbar text='Iniciar Sesión' link='/login' />
            </ul>
        </nav>
    );
};
