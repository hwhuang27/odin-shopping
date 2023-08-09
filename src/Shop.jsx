import { useState, useEffect } from 'react'

import Navbar from './Navbar'
import Product from './Product'

export default function Shop({handleAddToCart}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `https://fakestoreapi.com/products?limit=8`
                );
                if (!response.ok) {
                    throw new Error(
                        `HTTP Error: Status ${response.status}`
                    )
                }
                let actualData = await response.json();
                setData(actualData);
                setError(null);
            }
            catch (error) {
                setError(error);
                setData(null);
            }
            finally {
                setLoading(false);
            }
        }
        getData();
    }, [])

    if(!data){
        return (
            <>
                <Navbar />
                <h1 className="mt-6">Loading...</h1>
            </>
        )
    }

    return (
        <>
        <Navbar />
            <div className="grid grid-cols-4 px-12 gap-8 py-4">
                {data.map((item) => {
                    return <Product
                        key={item.id} id={item.id}
                        name={item.title} price={item.price}
                        image={item.image}
                        handleAddToCart={handleAddToCart}>
                    </Product>
                })}
            </div>

        </>
    )
}
