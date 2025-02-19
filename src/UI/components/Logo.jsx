import React from 'react';

export const Logo = ({style, src}) => {
    return (
        <div>
            <img src={src} alt="Logo-germogli" className={style} ></img>
        </div>
    );
};
