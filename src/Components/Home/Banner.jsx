import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section>
            <div className="bg-indigo-400">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">Provident blanditiis cum exercitationem</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                    <div className="flex flex-wrap justify-center">
                        <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50 hover:border-gray-700 hover:border hover:bg-indigo-400 hover:text-gray-900"><Link to='/services'>Get started</Link></button>
                        <button type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900 hover:bg-gray-800 hover:text-gray-50"><Link to='/about'>Know More</Link></button>
                    </div>
                </div>
            </div>
            <img src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
        </section>

    );
};

export default Banner;