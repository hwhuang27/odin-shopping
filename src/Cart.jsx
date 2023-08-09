import Navbar from './Navbar'
import CartItem from './CartItem'

export default function Cart({cart}) {
    const isEmpty = () => {
        return Object.keys(cart).length === 0;
    }

    let subtotal = 0;
    if(!isEmpty(cart)){
        cart.map(item => {
            subtotal += (item.price * item.quantity);
        })
    }

    return (
        <>
        <Navbar />
        <div className="grid justify-center gap-4 mt-12">
                {isEmpty(cart) &&
                    <h1 className="mt-8">Your Cart is empty!</h1>
                }
                {!isEmpty(cart) &&
                    <>
                    {cart.map((item) => {
                        return <CartItem 
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            price={item.price}
                            image={item.image}
                        />
                    })}
                    <p className="font-bold text-xl my-4">Subtotal: ${subtotal}</p>
                    <button className="bg-blue-400 text-white mb-12 text-2xl">Checkout</button>
                    </>
                }
        </div>
        </>
    )
}