import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({singleBook}) => {
    console.log(singleBook)
    return (
        <Link to={`/BookDetails/${singleBook.bookId}`}>
              <div className="card bg-base-100 border-2 border-blue-500  w-96 shadow-sm">
  <figure className=' bg-gray-200 p-4 rounded-2xl w-2/3 mx-auto mt-6'>
    <img className='h-[200px] p-4'
      src={singleBook.image}
      alt="Books" />
  </figure>
     
  <div className="card-body">

        <div className='flex justify-center gap-10 font-bold'>
            {
                singleBook.tags.map(tag => <button>{tag}</button>)
            }
        </div>

    <h2 className="card-title">
      {singleBook.bookName}
      <div className="badge badge-secondary">{singleBook.yearOfPublishing}</div>
    </h2>
    <p>Book by : {singleBook.author}</p>
    <div className="card-actions flex justify-between">
       <div className="badge badge-outline">{singleBook.category}</div>
      <div className="badge badge-outline">{singleBook.rating} <FaStar></FaStar></div>
    </div>
  </div>
</div>
        </Link>
    );
};

export default Book;