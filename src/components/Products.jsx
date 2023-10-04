import { useState } from "react";
import ShoppingCart from "./ShoppingCart";
const Products = () => {
    const productlist = [
        {
            name: 'Beetroot Malt',
            quantity: '500gm',
            price: 200,
            imageUrl: 'src/images/beetroot malt.png',
        },
        {
            name: 'Carrot Malt',
            quantity: '500gm', 
            price: 200,
            imageUrl: 'src/images/carrot malt.png',
        },
        {
            name: 'Banana Powder',
            quantity: '500gm',
            price: 200,
            imageUrl: 'src/images/banana powder.png',
        },
        {
            name: 'Beetroot Malt',
            quantity: '500gm',
            price: 200,
            imageUrl: 'src/images/beetroot malt.png',
        },
        // Add more product data as needed
    ];

    const [cart, setCart] = useState([...productlist]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="bg-sea-green px-10 pt-16 pb-20">
            <div className='max-w-[1060px] mx-auto'>
                <h2 className='text-white font-bold text-lg text-center font-Mont md:text-2xl'>Featured Products</h2>
                <div className='grid grid-cols-12 gap-4 mt-10'>
                    {productlist.map((product, index) => (
                        <div
                            className={`bg-mint-cream rounded-md shadow-xl font-Mont font-semibold text-green-950 col-span-6 md:col-span-3 lg:col-span-3`}
                            key={index}
                        >
                            <img className='w-[90%] mx-auto' src={product.imageUrl} alt={product.name} />
                            <div className='p-3'>
                                <h3>{product.name}</h3>
                                <p className='font-medium text-sm pb-2'>[{product.quantity}]</p>
                                <p className='font-medium '>Rs.{product.price}</p>
                                <button className='mt-4 text-center text-white p-2 rounded-md shadow-md text-sm col-start-1 col-end-5 w-full bg-jade hover:bg-sea-green' onClick={() => addToCart(product)}>Add to cart</button>
                                {/* Add more product details here */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ShoppingCart cart={cart} />
        </div>
    );
}

export default Products;
