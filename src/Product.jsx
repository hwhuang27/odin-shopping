
export default function Product({ name, price, image}) {

    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-2xl p-4 select-none flex flex-col hover:scale-105 transition-transform">
                <img className="w-full h-48 object-contain" src={image} alt="product image"></img>
                <div className="">
                    <div className="px-2 py-6">
                        <div className="font-bold text-l">{name}</div>
                    </div>
                    <div className="px-4 pb-1">
                        <span className="inline-block bg-gray-200 rounded-full px-4 py-2 text-m font-semibold text-gray-700 mr-2 mb-2">${price}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

