import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleService = () => {
    const services = useLoaderData();
    return (
        <div className='text-center'>
            <img className='mx-auto mt-5' src={services.data.img} alt="" />
            <h3 className='text-4xl font-bold my-5'>{services.data.name}</h3>
            <p className='lg:px-60'>{services.data.details}</p>
        </div>
    );
};

export default SingleService;