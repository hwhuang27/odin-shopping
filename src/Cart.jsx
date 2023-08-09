import Navbar from './Navbar'
import CartItem from './CartItem'

export default function Cart({cart}) {

    console.log(cart);

    return (
        <>
        <Navbar />
            <h1 className="text-center mt-8">Cart</h1>
        </>
    )
}