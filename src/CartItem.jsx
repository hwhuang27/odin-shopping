import { useState } from 'react';

export default function CartItem({ id, name, quantity, price, image }) {

    return (
        <div className="flex flex-col gap-2 border border-black rounded-lg box-border">
            <img src={image} alt={name} 
                className="object-contain max-h-24 mt-4"/>
            <p className="font-bold px-4 flex-1">{name}</p>
            <p>Price: ${price}</p>
            <p className="mb-4">Quantity: {quantity}</p>
        </div>
    )
}

