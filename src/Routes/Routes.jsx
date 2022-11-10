import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
import AddReview from "../Components/AddReview";
import AddService from "../Components/AddService";
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
                loader: () => fetch('https://lawyer-server-theta.vercel.app/services/home'),
                element: <Home />
            },
            {
                path: '/home',
                loader: () => fetch('https://lawyer-server-theta.vercel.app/services/home'),
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
                element: <Blog />
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
                path: '/addReview/:id',
                element: <AddReview />
            },
            {
                path: '/reviews',
                element: <PrivateRoutes><Reviews /></PrivateRoutes>
            },
            {
                path: '/reviews/edit/:id',
                element: <PrivateRoutes><EditReview /></PrivateRoutes>
            },
            {
                path: '/services',
                loader: () => fetch('https://lawyer-server-theta.vercel.app/services'),
                element: <PrivateRoutes><Services /></PrivateRoutes>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`https://lawyer-server-theta.vercel.app/services/${params.id}`),
                element: <PrivateRoutes><SingleService /></PrivateRoutes>
            },
            {
                path: '/addService',
                element: <AddService />
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])

export default router;