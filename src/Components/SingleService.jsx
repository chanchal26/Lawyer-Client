import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Helmet } from "react-helmet";

const SingleService = () => {
    const services = useLoaderData();
    const [refresh, setRefresh] = useState(false);
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`https://lawyer-server-theta.vercel.app/reviews`)
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
    }, [refresh, services]);

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

    const handleAddReview = (name) => {
        navigate(`/addReview/${name}`)
    }


    return (
        <div className='text-center'>

            <PhotoProvider>
                <PhotoView src={services.data.img}>
                    <img className="mx-auto mt-5 cursor-pointer" src={services.data.img} alt="" />
                </PhotoView>
            </PhotoProvider>
            <h3 className='text-4xl font-bold my-5'>{services.data.name}</h3>
            <Link to='/pricing' className='text-indigo-500 text-lg'>Pricing</Link>
            <p className='lg:px-60'>{services.data.details}</p>
            <div>
                <div>
                    <div className=" px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                        {
                            reviews?.length === 0 && <div className='text-center'>
                                <h2 className='text-3xl font-bold'>No Review added</h2>
                                <p className='text-2xl font-semibold'>Please Add a Review</p>
                            </div>
                        }
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
                                                        <span className="text-xs text-green-300">Few Minute Ago</span>
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
                        </div>
                    </div>
                </div>
                <div className="p-2 w-full ">
                    <button onClick={() => handleAddReview(services.data.name)} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"> Add Review</button>
                </div>

            </div>

            <Helmet>
                <title>Service Details</title>
            </Helmet>
        </div>
    );
};

export default SingleService;