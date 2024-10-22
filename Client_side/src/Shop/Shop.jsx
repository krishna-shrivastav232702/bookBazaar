import React, { useState, useEffect ,useContext} from "react"
import { Card } from "flowbite-react";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatchFavorites } from '../components/FavoriteContext';
import { AuthContext } from "../contacts/AuthProvider";




const Shop = () => {
    const [books, setBooks] = useState([]);
    const dispatch = useDispatchFavorites();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    

    useEffect(() => {
        fetch("http://localhost:3000/allBooks").then(res => res.json()).then(data => setBooks(data));
    }, [])

    const handleFavorite = async (book) => {
        await dispatch({
            type: "ADD",
            id: book._id,
            title: book.bookTitle,
            author: book.authorName,
            image: book.imageURL,
        });
        alert("book added successfully");
        // navigate('/shop');
    };


    return (
        <div className="mt-28 px-4 lg:px-24 s">
            <h2 className="text-4xl font-semibold text-center">Browse Our Complete Book Collection</h2>

            <div className="grid gap-8 my-16 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 ">
                {
                    books.map(book =>
                        <Link to={`/book/${book._id}`}>
                            <Card className="max-w-xs shadow-2xl overflow-hidden"  >
                                <img src={book.imageURL} className="h-90 object-cover" />
                                <div className="flex justify-between">
                                    <div>
                                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {book.bookTitle}
                                        </h5>
                                        <p className="font-semibold text-gray-700   dark:text-gray-400">
                                            {book.authorName}
                                        </p>
                                    </div>

                                    {user ? (<>
                                        <Link to="/favorite">
                                            <button className="bg-red-600 font-semibold text-white py-2 px-2 h-8 rounded hover:bg-blue-700 transition-all" onClick={() => handleFavorite(book)}><MdFavoriteBorder /></button>
                                        </Link>
                                    </>) : (<>
                                        <Link to="/login">
                                            <button className="bg-red-600 font-semibold text-white py-2 px-2 h-8 rounded hover:bg-blue-700 transition-all" ><MdFavoriteBorder /></button>
                                        </Link>
                                    </>)}

                                </div>
                            </Card>

                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Shop;