import React from 'react';
import { Logo } from '../components/Logo';
import imgLogo from '../../assets/logo.png';
import { Title } from '../components/Title';

export const Header = () => {
    return (
        <header>
            <Logo style='h-32 w-40' src={imgLogo}/>
            <Title style="text-white text-xl font-bold" text="¡Cultiva Conocimiento, Cosecha Comunidad!"/>
            
        </header>
    );
};
