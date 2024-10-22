import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

function BestSellerBooks() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/allbooks").then(res => res.json()).then(data => setBooks(data.slice(0,7)))
  }, [])
  return (
    <div>
      <BookCards books={books} headLine="Best Seller Books"/>
    </div>
  )
}

export default BestSellerBooks