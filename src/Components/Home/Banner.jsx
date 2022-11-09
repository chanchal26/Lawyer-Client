import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className="bg-gray-600 text-white">
            <div
                className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
            >
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="bg-gradient-to-r from-green-300 via-indigo-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                    >
                        Leading Criminal Defense Lawyer.

                        <span className="sm:block"> Your Ultimate Law And Legal Partner. </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                        We’re a financial and consulting business company of professinal thinkers, strategists, digital innovators, designers and problem solvers (everyone gets a mention). Our sense of curiosity brings brands to life, gets them talking, and makes sure they’re heard above.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            className="block w-full rounded border border-indigo-500 bg-indigo-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            to="/services"
                        >
                            Get In Touch
                        </Link>

                        <Link
                            className="block w-full rounded border border-indigo-500 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
                            to="/services"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Banner;