import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../Pages/Home";
import GadgetDetails from "../Components/GadgetDetails";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Categoryes from "../Components/Categoryes";
import HomeTow from "../Pages/HomeTow";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                index: true, // Default route
                element: <Home></Home>,
            },
            {
                path: "category/:category",
                element: <HomeTow></HomeTow>,
                loader: () => fetch('/Gadgets.json'), // Corrected loader path
            },
            {
                path: "gadget/:productId",
                element: <GadgetDetails />,
                loader: () => fetch('/Gadgets.json'),
            },
            {
                path: "statistics",
                element: <Statistics></Statistics>,
                loader: () => fetch('/Gadgets.json'),
            },
            {
                path: "dashboard",
                element: <Dashboard></Dashboard>,
            },
            {
                path: "categories",
                element: <Categoryes></Categoryes>,
            },
        ],
    },
]);

export default router;
