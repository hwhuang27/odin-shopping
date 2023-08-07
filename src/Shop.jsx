import { useState } from 'react'
import Navbar from './Navbar'

function Shop() {
    const [count, setCount] = useState(0)

    return (
        <>
        <Navbar />
            <h1 className="text-center">Shop</h1>
        </>
    )
}

export default Shop;
