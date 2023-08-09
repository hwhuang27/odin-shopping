import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <>
            <nav className="navbar bg-neutral-800">
            <ul className="flex justify-center">
                <Link to="/" 
                    className="p-3 px-12 text-2xl text-white hover:bg-white hover:text-neutral-800">Home</Link>
                
                <Link to="/shop" 
                    className="p-3 px-12 text-2xl text-white hover:bg-white hover:text-neutral-800">Shop</Link>
                
                <Link to="/cart" 
                    className="p-3 px-12 text-2xl text-white hover:bg-white hover:text-neutral-800">Cart</Link>
            </ul>
        </nav>
        </>
    )
}