import React, { useState } from 'react'
import { useParams, useLoaderData,useNavigate } from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";

const EditBooks = () => {

  const { id } = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData();
  const navigate= useNavigate();

  const bookCategories = [
    "Fiction", "NonFiction", "Mistery", "Fantasy", "Horror", "Young Adult Fiction", "History", "Comic", "Self Help", "Graphic Novels", "Poetry", "Children's", "Classics", "Psychology", "Sports", "Romance"
  ]

  const [selectedCategory, SetSelectedCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (e) => {
    console.log(e.target.value);
    SetSelectedCategory(e.target.value);
  }
  //handle book submission

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const PdfURL = form.bookPDFURL.value;

    const updateBookObject = {
      bookTitle, authorName, imageURL, category, bookDescription, PdfURL
    }
    

    // update book data

    fetch(`http://localhost:3000/book/${id}`,{
      method:"PATCH",
      headers:{
        "Content-type":"application/json",
      },
      body: JSON.stringify(updateBookObject)  
    }).then(res => res.json()).then(data =>{
      alert("Book Updated Successfully");
      navigate('/admin/dashboard/manage');
    })


  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Edit This Book</h2>

      <form onSubmit={handleUpdate} className="flex flex-col  lg:w-[1180px] gap-4">
        <div className='flex gap-8'>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" type="text" name="bookTitle" placeholder="Book Name" required defaultValue={bookTitle} />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" type="text" name="authorName" placeholder="Author Name" required defaultValue={authorName}/>
          </div>
        </div>
        {/* second row */}
        <div className='flex gap-8'>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" type="text" name="imageURL" placeholder="Book Image URL" required defaultValue={imageURL}/>
          </div>
          {/* category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedCategory} onChange={handleChangeSelectedValue} >
              {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </Select>
          </div>
        </div>
        {/* book description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" placeholder="Enter a brief summary of the book" required rows={5} className='w-full' defaultValue={bookDescription} />
        </div>
        {/* book pdf url */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="Book PDF URL Here" required shadow defaultValue={bookPDFURL} />
        </div>
        <Button type="submit" className='mt-5 w-1/4 bg-red-600 hover:bg-blue-700 '>
          Update Book
        </Button>

      </form>


    </div>
  )
}

export default EditBooks