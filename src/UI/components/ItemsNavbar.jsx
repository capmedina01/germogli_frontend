import React from 'react';
import { Link } from 'react-router-dom';

export const ItemsNavbar = ({text, link}) => {
    return (

        <Link to={link} className='text-white hover: underline'>{text}</Link>
        
    );
};

