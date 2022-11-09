import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Helmet } from "react-helmet";

const Services = () => {
    const services = useLoaderData();

    return (

        <div>
            <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="relative mx-auto max-w-7xl">
                    <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
                        {
                            services.data.map(service => {
                                return (
                                    <div key={service._id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                        <div className="flex-shrink-0">
                                            <PhotoProvider>
                                                <PhotoView src={service.img}>
                                                    <img className="object-cover w-full h-48 cursor-pointer" src={service.img} alt="" />
                                                </PhotoView>
                                            </PhotoProvider>
                                        </div>
                                        <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                            <div className="flex-1">
                                                <div href="#" className="block mt-2">
                                                    <p className="text-xl font-bold text-neutral-600">{service.name}</p>
                                                    <Link to='/pricing' className='text-indigo-500 text-lg'>Pricing</Link>
                                                    <p className="mt-3 text-base text-gray-500">{service.details.slice(0, 250) + '...'}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='pb-5'>
                                            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link to={`/services/${service._id}`}>Details</Link></button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='pb-5'>
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link to='/addService'>Add Service</Link></button>
            </div>
            <Helmet>
                <title>Services</title>
            </Helmet>
        </div>
    );
};

export default Services;