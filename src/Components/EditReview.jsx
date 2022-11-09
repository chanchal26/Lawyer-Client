import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet";

const EditReview = () => {
    const router = useParams();
    const { id } = router;
    const [review, setReview] = useState({});
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setReview(data.data)

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
    }, [refresh, id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const review = {
            rating: e.target.rating.value,
            message: e.target.message.value
        }
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire(
                        data.message
                    )
                    setRefresh(true);
                    navigate('/reviews')
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
    }

    return (
        <form onSubmit={handleSubmit} className="text-gray-600 body-font relative">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full ">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Review Us</h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2 mx-auto">
                            <div className="relative">
                                <label htmlFor="rating" className="leading-7 text-sm text-gray-600">Rating Out of 10</label>
                                <input defaultValue={review?.rating} type="number" id="rating" name="rating" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea defaultValue={review?.message} id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full ">
                            <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update</button>
                        </div>
                    </div>
                </div>
            </div>
            <Helmet>
                <title>Edit Review</title>
            </Helmet>
        </form>
    );
};

export default EditReview;