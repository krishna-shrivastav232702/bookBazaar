import React from 'react';
import { useCart, useDispatchCart } from '../components/ContextReducer';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Link } from 'react-router-dom';

function Cart() {
    const cartItems = useCart();
    const dispatch = useDispatchCart();

    const handleRemoveFromCart = (id) => {
        dispatch({ type: "REMOVE", id });
    };

    const handleIncreaseQty = (item) => {
        dispatch({ type: "ADD", id: item.id, qty: 1, title: item.title, price: item.price, image: item.image });
    };

    const handleDecreaseQty = (item) => {
        if (item.qty > 1) {
            dispatch({ type: "ADD", id: item.id, qty: -1, title: item.title, price: item.price, image: item.image });
        } else {
            handleRemoveFromCart(item.id);
        }
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

    return (
        <div className='p-4'>
            <h1 className='text-3xl font-bold mt-28 px-4 lg:px-24 flex flex-col items-center'>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <div className='flex flex-col items-center justify-center mt-12'>
                    <p className='text-2xl font-semibold'>OOPS! Your cart is empty.</p>
                    <Link to="/shop">
                        <button className='mt-2 bg-red-600 text-white rounded px-4 py-2 hover:bg-blue-700'>Visit shop</button>
                    </Link>
                </div>
            ) : (
                <div>
                    <ul className="flex flex-col">
                        {cartItems.map(item => {
                            const itemTotal = item.price * item.qty; // Calculate individual item total
                            return (
                                <li key={item.id} className='flex items-center justify-between my-4 p-4 border-b'>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className='w-20 h-20 mr-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 object-contain'
                                    />
                                    <div className='flex-1 text-center'>
                                        <h2 className='text-xl font-semibold'>{item.title}</h2>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <button
                                            className='bg-red-600 text-white px-2 py-1 rounded-l hover:bg-blue-700'
                                            onClick={() => handleDecreaseQty(item)}
                                        >
                                            -
                                        </button>
                                        <span className='mx-2'>{item.qty}</span>
                                        <button
                                            className='bg-red-600 text-white px-2 py-1 rounded-r hover:bg-blue-700'
                                            onClick={() => handleIncreaseQty(item)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className='flex-1 text-center'>
                                        <p>
                                            Price:
                                            <MdOutlineCurrencyRupee className='inline' />{item.price}
                                        </p>
                                    </div>
                                    <div className='flex-1 text-center'>
                                        <p>
                                            Total: <MdOutlineCurrencyRupee className='inline' /> {itemTotal}
                                        </p>
                                    </div>
                                    <button
                                        className='bg-red-600 text-white px-4 py-2 rounded hover:bg-blue-700'
                                        onClick={() => handleRemoveFromCart(item.id)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    <div className='flex flex-col items-center justify-center mt-4'>
                        <h2 className='text-2xl font-bold mb-8'>Total Price: <span className='text-red-600'>₹{totalPrice}</span></h2>
                        <button className='bg-red-600 text-white px-4 py-2 rounded hover:bg-blue-700'>Pay</button>
                    </div>
                    
                </div>
            )}
        </div>
    );
}

export default Cart;
