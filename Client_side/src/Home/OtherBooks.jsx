import React from 'react'
import { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/allbooks").then(res => res.json()).then(data => setBooks(data.slice(7)))
    }, [])
    return (
      <div>
        <BookCards books={books} headLine="Other Books"/>
      </div>
    )
}

export default OtherBooks