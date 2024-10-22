import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { AuthContext } from "../contacts/AuthProvider";



//react icons
import { FaBookOpen } from "react-icons/fa6";
import { FaXmark, FaList } from "react-icons/fa6";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { user } = useContext(AuthContext);
    console.log(user);
    //toggle menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll", handleScroll);


        return () => {
            window.removeEventListener("scroll", handleScroll);
        }


    }, [])


    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Books Online", path: "/admin/dashboard" },
        // { link: "Blog", path: "/blog" }
    ]
    
    return (
        <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-400">
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/* logo */}
                    <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center "><FaBookOpen className='inline-block' />&nbsp;BookBazaar</Link>

                    {/* nav items for large device */}

                    <ul className="md:flex space-x-12 hidden">
                        {
                            navItems.map(({ link, path }) => (
                                <Link key={path} to={path} className="block text-base text-black uppercase cursor-pointer hover:text-red-600">{link}</Link>

                            ))
                        }
                    </ul>

                    {/* btn for large devices */}

                    <div className="space-x-4 hidden lg:flex items-center">
                        {user ? (<>
                            <Link to="/mycart">
                            <button className="px-4 py-2 hover:bg-red-600 rounded text-white bg-blue-700 mr-4">My Cart</button>
                            </Link>
                            <img src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png" } alt="User Profile" className="w-10 h-10 rounded-full" />
                            </>) : (
                            <>
                                <Link to="/signup">
                                    <button className="px-4 py-2 bg-red-600 rounded text-white hover:bg-blue-700">Sign Up</button>
                                </Link>
                                <Link to="/login">
                                    <button className="px-4 py-2 bg-red-600 rounded text-white hover:bg-blue-700">Log In</button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* menu btn for mobile devices */}
                    <div className="md:hidden mt-2">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            {
                                isMenuOpen ? <FaXmark className="h-5 w-5 text-black" /> : <FaList />
                            }
                        </button>
                    </div>

                    {/* nav items for small devices */}
                    <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 md:hidden ${isMenuOpen ? "block fixed top-0 right-0 left-0 mt-20" : "hidden"}`}>
                        {
                            navItems.map(({ link, path }) => (
                                <Link key={path} to={path} className="block text-base text-white uppercase cursor-pointer hover:text-red-500">{link}</Link>

                            ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;