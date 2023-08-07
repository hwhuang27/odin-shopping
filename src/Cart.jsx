import { useState } from 'react'
import Navbar from './Navbar'

function Cart() {
    const [count, setCount] = useState(0)

    return (
        <>
        <Navbar />
            <h1 className="text-center">Cart</h1>
        </>
    )
}

export default Cart;
