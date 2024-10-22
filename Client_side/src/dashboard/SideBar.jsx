import React, { useContext } from 'react'
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {  HiChartPie,  HiUser, HiViewBoards,HiDocumentAdd} from "react-icons/hi";
import { FaBookOpen } from "react-icons/fa6";
import { MdLibraryBooks,MdLogin,MdLogout } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { AuthContext } from '../contacts/AuthProvider';

const SideBar = () => {
  const {user}=useContext(AuthContext);
  // console.log(user);  
  const firstName = user?.displayName?.split(' ')[0] || 'User';

  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="/" img="" imgAlt="" className='text-blue-600 mt-4' >
      <FaBookOpen className='inline-block' />&nbsp;BookBazaar
      </Sidebar.Logo>
      <Sidebar.Items className='px-4'>
        <Sidebar.ItemGroup>
          {/* <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item> */}
          <Sidebar.Item href="/admin/dashboard" icon={HiUser}>
            <p>{`Hi ${firstName}`}</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiDocumentAdd}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={MdLibraryBooks}>
            Manage books
          </Sidebar.Item>
          <Sidebar.Item href="/favorite" icon={MdFavorite}>
            Favorites
          </Sidebar.Item> 
          <Sidebar.Item href="/logout" icon={MdLogout}>
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar