import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const review = {
            name: e.target.name.value,
            url: e.target.url.value,
            rating: e.target.rating.value,
            message: e.target.message.value
        }
        fetch('https://lawyer-server-theta.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire(
                        'Good job!',
                        data.message,
                        'success'
                    )
                    setRefresh(!refresh);
                    e.target.reset();
                } else {
                    Swal.fire(
                        data.error
                    )
                }
            })
            .catch(error => {
                Swal.fire(
                    error.message
                )
            })
    };

    useEffect(() => {
        fetch('https://lawyer-server-theta.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setReviews(data.data)

                } else {
                    Swal.fire(
                        data.error
                    )
                }
            })
            .catch(err => {
                Swal.fire(
                    err.message
                )
            })
    }, [refresh]);

    const handleDelete = (id) => {
        fetch(`https://lawyer-server-theta.vercel.app/reviews/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire(
                        'Successfully Deleted',
                    )
                    setRefresh(!refresh);
                } else {
                    Swal.fire(
                        data.error
                    )
                }
            }).catch(err =>
                Swal.fire(
                    err.message
                ))
    }

    const navigate = useNavigate();
    const handleEdit = (id) => {
        navigate(`/reviews/edit/${id}`)
    }
    console.log(reviews);

    return (
        <div className=" px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className=" mx-auto max-w-7xl">
                <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">

                    {
                        reviews.map(review =>
                            <div key={review._id} className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
                                <div className="flex justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src={review.url} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{review.name}</h4>
                                            <span className="text-xs text-green-300">just now</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 text-yellow-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                        </svg>
                                        <span className="text-xl font-bold">{review.rating}</span>
                                    </div>
                                </div>
                                <div className="p-4 space-y-2 text-sm text-gray-400">
                                    <p>{review.message}</p>
                                </div>
                                <div className='flex pt-5'>
                                    <button onClick={() => handleEdit(review._id)} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Edit</button>
                                    <button onClick={() => handleDelete(review._id)} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Delete</button>
                                </div>
                            </div>
                        )
                    }

                </div>
                <form onSubmit={handleSubmit} className="text-gray-600 body-font relative">
                    <div className="container px-5 py-10 mx-auto">
                        <div className="flex flex-col text-center w-full ">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Review Us</h1>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " required />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="url" className="leading-7 text-sm text-gray-600">Image URL</label>
                                        <input type="url" id="url" name="url" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2 mx-auto">
                                    <div className="relative">
                                        <label htmlFor="rating" className="leading-7 text-sm text-gray-600">Rating Out of 10</label>
                                        <input type="number" id="rating" name="rating" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full ">
                                    <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Helmet>
                <title>My Review</title>
            </Helmet>
        </div>
    );
};

export default Reviews;