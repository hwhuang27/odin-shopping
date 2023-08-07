import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <>
        <nav className="navbar p-4 border-y-2 mb-4">
            <ul className="flex gap-24 justify-center">
                <li className="mr-6">
                    <Link to="/" 
                    className="text-3xl text-blue-500 hover:text-blue-800">Home</Link>
                </li>
                <li className="mr-6">
                    <Link to="/shop" 
                    className="text-3xl text-blue-500 hover:text-blue-800">Shop</Link>
                </li>                
                <li className="mr-6">
                    <Link to="/cart" 
                    className="text-3xl text-blue-500 hover:text-blue-800">Cart</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}