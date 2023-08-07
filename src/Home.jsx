import { useState } from 'react'
import Navbar from './Navbar.jsx'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
        <Navbar/>
        <h1 className="text-center">Home</h1>
        </>
    )
}

export default Home;
