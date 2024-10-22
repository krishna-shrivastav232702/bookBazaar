import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';
import { MdOutlineDelete } from "react-icons/md";

const ManageBook = () => {

  const [allBooks, SetAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/allBooks",).then(res => res.json()).then(data => SetAllBooks(data));
  }, [])

  //delete book

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/book/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      console.log(data);
      alert("The book has been successfully deleted.")
      const newBooks = allBooks.filter(book => book._id !== id);
      SetAllBooks(newBooks);
    });
  }
  return (
    <div className='px-4 my-12 '>
      <h2 className='mb-8 text-3xl font-bold'>Manage your books</h2>

      {/* tablle for book data */}
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>S.No</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>
            <span className="">Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell>{book.bookTitle}</Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>
                <Link href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" to={`/admin/dashboard/editBooks/${book._id}`}>
                  Edit
                </Link>
                <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-bold text-xl text-white rounded hover:bg-blue-700 mx-4 '><MdOutlineDelete /></button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>)
        }

      </Table>
    </div>
  )
}

export default ManageBook