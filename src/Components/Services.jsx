import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (

        <section>
            <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="relative mx-auto max-w-7xl">
                    <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
                        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div className="flex-shrink-0">
                                <img className="object-cover w-full h-48" src="https://images.unsplash.com/photo-1561654791-00316c79efa8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="" />
                            </div>
                            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                <div className="flex-1">
                                    <Link href="#" className="block mt-2">
                                        <p className="text-xl font-semibold text-neutral-600">Boost your conversion rate</p>
                                        <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
                                    </Link>
                                </div>
                                <div className="flex items-center mt-6">
                                    <div className="flex-shrink-0">
                                        <Link href="https://twitter.com/Mike_Andreuzza">
                                            <span className="sr-only">Michael Andreuzza</span>
                                            <img className="w-10 h-10 rounded-full" src="https://d33wubrfki0l68.cloudfront.net/2f76102fd18a4e095eaed7a836a3f2183a982a4d/91dd4/images/avatar.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-neutral-600">
                                            <Link href="https://twitter.com/Mike_Andreuzza" className="hover:underline"> Michaerl Andreuzza</Link>
                                        </p>
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <time dateTime="2020-03-16"> Mar 16, 2020 </time>
                                            <span aria-hidden="true"> · </span>
                                            <span> 6 min read </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;