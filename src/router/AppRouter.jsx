import React from 'react';
import { Routes , Route} from 'react-router-dom';
import { HomePage } from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';

export const AppRouter = () => {
    return (
        
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/login' element={<LoginPage/>} />
        </Routes>
    );
};
