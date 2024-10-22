import React from 'react';
import { useFavorites, useDispatchFavorites } from '../components/FavoriteContext';
import { Link } from 'react-router-dom';

function FavoriteBook() {
    const favorites = useFavorites();
    const dispatch = useDispatchFavorites();


    return (
        <div className='p-4'>
            <h1 className='text-3xl font-bold mt-28 px-4 lg:px-24 flex flex-col items-center'>Favorite Books</h1>
            {
                favorites.length === 0 ? (
                    <div className='flex flex-col items-center justify-center mt-12'>
                        <p className='text-2xl font-semibold'>No favorite books added.</p>
                        <Link to="/shop">
                            <button className='mt-2 bg-red-600 text-white rounded px-4 py-2 hover:bg-blue-700'>Visit shop</button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <div className='flex flex-col items-center justify-center mt-4'>
                            <h2 className='text-2xl font-bold mt-4 mb-6'>Total Favorites: <span className='text-red-600'>{favorites.length}</span></h2>
                            <Link to="/shop">
                                <button className='mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mb-8'>View More</button>
                            </Link>
                        </div>
                        <div className=" ml-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            {favorites.map(book => (
                                <div key={book.id} className="border rounded-lg p-4 shadow-lg flex flex-col items-center">
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="w-40 h-60 mb-4 rounded-lg object-contain"
                                    />
                                    <h2 className="text-xl font-semibold text-center">{book.title}</h2>
                                    <p className="text-gray-700 text-center">{book.author}</p>
                                    <button
                                        className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 "
                                        onClick={() => dispatch({ type: "REMOVE", id: book.id })}
                                    >
                                        Remove from favorites
                                    </button>
                                </div>
                            ))}
                        </div>


                    </div>
                )}
        </div>
    );
}

export default FavoriteBook;
