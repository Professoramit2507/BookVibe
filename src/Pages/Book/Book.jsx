import React, { useEffect, useState } from 'react';

const Book = () => {
    const [allBooks,setallBooks] = useState([])

    useEffect(() => {
        fetch("bookdata.json")
        .then(res => res.json())
        .then(data => {
            setallBooks(data)
        })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Book;