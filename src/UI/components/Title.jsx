import React from 'react';

export const Title = ({text, style}) => {
    return (
        <div className='flex items-center'>
            <h1 className={style}>{text}</h1>
        </div>
    );
};
