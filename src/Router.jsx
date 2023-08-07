import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx"
import Shop from "./Shop.jsx"
import Cart from "./Cart.jsx"

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            // errorElement: <ErrorPage />
        },        
        {
            path: "shop",
            element: <Shop />,
        },        {
            path: "cart",
            element: <Cart />,
        },
    ])

    return <RouterProvider router={router} />
}

export default Router;