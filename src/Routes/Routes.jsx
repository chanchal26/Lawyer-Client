import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
import Blog from "../Components/Blog";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Components/Login";
import Pricing from "../Components/Pricing";
import Register from "../Components/Register";
import Reviews from "../Components/Reviews";
import Services from "../Components/Services";
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
                path: '/services',
                element: <Services />
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])

export default router;