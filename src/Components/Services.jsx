import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData();

    return (

        <section>
            <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="relative mx-auto max-w-7xl">
                    <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
                        {
                            services.data.map(service => {
                                return (
                                    <div key={service._id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                        <div className="flex-shrink-0">
                                            <img className="object-cover w-full h-48" src={service.img} alt="" />
                                        </div>
                                        <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                            <div className="flex-1">
                                                <Link href="#" className="block mt-2">
                                                    <p className="text-xl font-bold text-neutral-600">{service.name}</p>
                                                    <p className="mt-3 text-base text-gray-500">{service.details.slice(0, 250) + '...'}</p>
                                                </Link>
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
        </section>
    );
};

export default Services;