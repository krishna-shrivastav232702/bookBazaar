import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../Shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBooks from "../dashboard/EditBooks";
import SignUp from "../components/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Cart from "../components/Cart";
import FavoriteBook from "../Shop/FavoriteBook";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/Blog",
                element: <Blog />
            },
            {
                path: "/book/:id",
                element: <SingleBook />,
                loader: ({ params }) => fetch(`http://localhost:3000/book/${params.id}`)
            },{
                path:"/mycart",
                element:<Cart/>,

            },
            {
                path:"/favorite",
                element:<FavoriteBook/>
            }
        ]
    },
    {
        path: '/admin/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/admin/dashboard',
                element: <PrivateRoute><Dashboard/></PrivateRoute>
            },
            {
                path:"/admin/dashboard/upload",
                element:<UploadBook/>
            },
            {
                path:"/admin/dashboard/manage",
                element:<ManageBook/>
            },
            {
                path:"/admin/dashboard/editBooks/:id",
                element:<EditBooks/>,
                loader: ({ params }) => fetch(`http://localhost:3000/book/${params.id}`)
            },
           
        ]
    },
    {
        path:"signup",
        element:<SignUp/>
    },{
        path:"login",
        element:<Login/>
    },{
        path:"logout",
        element:<Logout/>
    }
]);

export default Router;