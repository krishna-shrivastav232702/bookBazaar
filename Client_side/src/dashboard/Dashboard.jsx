import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';
import { MdOutlineDelete } from "react-icons/md";

const Dashboard = () => {

  const [allBooks, SetAllBooks] = useState([]);
  console.log(allBooks.length)

  useEffect(() => {
    fetch("http://localhost:3000/allBooks",).then(res => res.json()).then(data => SetAllBooks(data));
  }, [])



  return (
    <div className='px-4 my-12 h-screen overflow-hidden flex flex-col  h-[calc(100vh-8rem)]'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='mb-8 text-3xl font-bold text-blue-700'>Your Library</h2>

        {/* Card showing total number of books */}
        <div className="bg-red-500 text-white p-4 rounded shadow mb-4 w-40 ">
          <h3 className="text-lg font-semibold">Total Books: {allBooks.length}</h3>
        </div>
      </div>

      {/* Table Container */}
      <div className="flex-1 overflow-auto ">
        <Table className='lg:w-[1180px]'>
          <Table.Head className='sticky top-0 z-10'>
            <Table.HeadCell>S.No</Table.HeadCell>
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {allBooks.map((book, index) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={book._id}>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>{book.bookTitle}</Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}

export default Dashboard