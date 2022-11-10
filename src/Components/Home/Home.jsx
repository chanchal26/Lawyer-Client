import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import Contact from './Contact';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Helmet } from "react-helmet";

const Home = () => {
    const data = useLoaderData();
    const services = data.data;
    return (

        <div>
            <Banner />
            <div className='mb-5'>
                <h2 className='text-4xl text-gray-500 font-bold text-center pt-12'>Our Services</h2>
                <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div className="relative mx-auto max-w-7xl">
                        <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
                            {
                                services?.length && services.map(service => {
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
                                                    <Link href="#" className="block mt-2">
                                                        <p className="text-xl font-bold text-neutral-600">{service.name}</p>
                                                        <Link to='/pricing' className='text-indigo-500 text-lg'>Pricing</Link>
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
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link to='/services'>View All</Link></button>
            </div>
            <section className="p-6 bg-gray-600 text-gray-100">
                <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
                        <p className="text-sm sm:text-base">Clients</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
                        <p className="text-sm sm:text-base">Followers on social media</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
                        <p className="text-sm sm:text-base">Published books</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">8</p>
                        <p className="text-sm sm:text-base">TED talks</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
                        <p className="text-sm sm:text-base">Years of experience</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
                        <p className="text-sm sm:text-base">Workshops</p>
                    </div>
                </div>
            </section>
            <section className="my-8">
                <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                    <h1 className="text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
                </div>
                <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                    <div className="flex flex-col items-center mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 text-gray-700">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">They are very Good at Defenses for petty theft, grand theft, robbery, burglary, auto burglary, embezzlemen.
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 text-gray-700">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg bg-indigo-500"></span>
                        <p>Leroy Jenkins</p>
                    </div>
                    <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 text-gray-700">
                                <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">I am satisfied with their work for Domestic battery, corporal injury to a spouse or cohabitant, criminal threats, child abuse.
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 text-gray-700">
                                <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg bg-indigo-500"></span>
                        <p>Leroy Jenkins</p>
                    </div>
                </div>
            </section>
            <Contact />
            <Helmet>
                <title>Home</title>
            </Helmet>
        </div>

    );
};

export default Home;