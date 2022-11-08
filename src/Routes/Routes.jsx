import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
import Blog from "../Components/Blog";
import EditReview from "../Components/EditReview";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Components/Login";
import Pricing from "../Components/Pricing";
import Register from "../Components/Register";
import Reviews from "../Components/Reviews";
import Services from "../Components/Services";
import SingleService from "../Components/SingleService";
import Main from "../Layout/Main";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/pricing',
                element: <Pricing />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/blog',
                element: <PrivateRoutes><Blog /></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/reviews',
                element: <Reviews />
            },
            {
                path: '/reviews/edit/:id',
                element: <EditReview />
            },
            {
                path: '/services',
                loader: () => fetch('http://localhost:5000/services'),
                element: <Services />
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <SingleService />
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])

export default router;