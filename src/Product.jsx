
export default function Product({ name, price, image}) {

    return (
        <>
            <div className="max-w-sm min-w-full rounded overflow-hidden shadow-2xl p-4 select-none flex flex-col justify-end hover:scale-105 transition-transform">
                <img className="w-full h-40 object-contain" src={image} alt="product image"></img>

                <div className="px-2 py-4 font-bold text-l">{name}</div>

                <div className="mb-3">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-m font-semibold text-gray-700">${price}</span>
                </div>

                <div className="p-2">
                    <button className="px-4 py-2 rounded-none border border-gray-700 hover:bg-gray-300 focus:outline-none">-</button>
                    <input type="number" placeholder="0" min="0" max="10"
                        className="w-12 py-2 font-bold text-slate-700 text-center  rounded-none caret-transparent border-y border-gray-700 hover:bg-gray-200 focus:outline-none"/>
                    <button className="px-4 py-2 rounded-none  border border-gray-700 hover:bg-gray-300 focus:outline-none">+</button>
                </div>
                
                <div className="p-2">
                    <button className="bg-slate-400 hover:bg-slate-500 border-none text-white font-bold py-2 px-4 rounded focus:outline-none">Add to Cart</button>
                </div>
            </div>
        </>
    )
}

