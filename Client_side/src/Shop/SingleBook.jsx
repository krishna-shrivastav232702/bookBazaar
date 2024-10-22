import React, { useState, useContext } from 'react'
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useDispatchCart, useCart } from '../components/ContextReducer';
import { AuthContext } from "../contacts/AuthProvider";


function SingleBook() {
    const { _id, bookTitle, imageURL, category, bookPrice } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [qty, setQty] = useState(1);

    let dispatch = useDispatchCart();
    let data = useCart()
    const handleAddToCart = async () => {
        await dispatch({
            type: "ADD",
            id: _id,
            title: bookTitle,
            price: bookPrice,
            qty: qty,
            image: imageURL
        })
        alert(`${bookTitle} has been added to your cart!`);
    }
    return (
        <div className='mt-28 px-4 lg:px-24 flex flex-col items-center justify-center '>

            <Link to="https://www.goodreads.com/">
                <img src={imageURL} className='h-96 ' />
            </Link>
            <h1 className='text-5xl text-center font-bold text- my-5'>{bookTitle}</h1>
            <h2 className='text-3xl font-semi-bold'>Category : <span className='font-bold text-red-600'>{category}</span></h2>
            <h2 className='mt-2 text-xl font-semibold  flex items-center'>Price  <span className=' flex items-center text-base '> : <MdOutlineCurrencyRupee /> {bookPrice}</span></h2>

            {user ?
                (<> <Link to="/shop">
                    <button className='mt-3 bg-red-600 text-white rounded px-4 py-2 hover:bg-blue-700' onClick={handleAddToCart}>Add to cart</button>
                </Link></>) : (<> <Link to="/login">
                    <button className='mt-3 bg-red-600 text-white rounded px-4 py-2 hover:bg-blue-700' >Add to cart</button>
                </Link></>)

            }
        </div>
    )
}

export default SingleBook