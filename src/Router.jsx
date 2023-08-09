import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx"
import Shop from "./Shop.jsx"
import Cart from "./Cart.jsx"

const Router = () => {
    const [cart, setCart] = useState({});

    const handleAddToCart = (id, quantity) => {
        setCart((newCart) => ({
            ...newCart,
            [id]: quantity,
        }));
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            // errorElement: <ErrorPage />
        },        
        {
            path: "shop",
            element: <Shop handleAddToCart={handleAddToCart}/>,
        },        {
            path: "cart",
            element: <Cart cart={cart}/>,
        },
    ])

    return <RouterProvider router={router} />
}

export default Router;