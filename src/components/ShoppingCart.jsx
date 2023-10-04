

const ShoppingCart = ({cart} ) => {
    console.log(cart)

    return (
        <div className="bg-sea-green px-10 pt-16 pb-20">
            <div className='max-w-[1060px] mx-auto'>
                <h2 className='text-white font-bold text-lg text-center font-Mont md:text-2xl'>Shopping Cart</h2>
                <div className='grid grid-cols-12 gap-4 mt-10'>
                    {cart.map((product,index) => (
                        <div
                            className={`bg-mint-cream rounded-md shadow-xl font-Mont font-semibold text-green-950 col-span-6 md:col-span-3 lg:col-span-3`}
                            key={index}
                        >
                            {/* Display cart items here */}
                            <h3>{product.name}</h3>
                            <p className='font-medium text-sm pb-2'>[{product.quantity}]</p>
                            <p className='font-medium '>Rs.{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
