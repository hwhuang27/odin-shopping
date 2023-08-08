import Navbar from './Navbar'
import Product from './Product'

function Shop() {

    return (
        <>
        <Navbar />
        <div className="grid grid-cols-3 p-4">
            <Product/>
            <Product/>
            <Product/>
        </div>

        </>
    )
}

export default Shop;
