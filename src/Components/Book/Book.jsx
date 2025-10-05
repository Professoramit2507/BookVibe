// import React from 'react';
// import { FaStar } from "react-icons/fa";
// import { Link } from 'react-router';

// const Book = ({singleBook}) => {
//     console.log(singleBook)
//     return (
//         <Link to={`/BookDetails/${singleBook.bookId}`}>
//               <div className="card bg-base-100 border-2 border-blue-500
//                 w-94 shadow-sm">
//   <figure className=' bg-gray-200 p-4 rounded-2xl w-2/3 mx-auto mt-6'>
//     <img className='h-[200px] p-4'
//       src={singleBook.image}
//       alt="Books" />
//   </figure>
     
//   <div className="card-body">

//         <div className='flex justify-center gap-10 font-bold'>
//             {
//                 singleBook.tags.map(tag => <button>{tag}</button>)
//             }
//         </div>

//     <h2 className="card-title">
//       {singleBook.bookName}
//       <div className="badge badge-secondary">{singleBook.yearOfPublishing}</div>
//     </h2>
//     <p>Book by : {singleBook.author}</p>
//     <div className="card-actions flex justify-between">
//        <div className="badge badge-outline">{singleBook.category}</div>
//       <div className="badge badge-outline">{singleBook.rating} <FaStar></FaStar></div>
      
//     </div>
//     <p className='text-md font-bold'>Pages : {singleBook.totalPages}</p>
//   </div>
// </div>
//         </Link>
//     );
// };

// export default Book;



import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router'; 

const Book = ({ singleBook }) => {
  return (
    <Link to={`/BookDetails/${singleBook.bookId}`}>
      <div className="card bg-base-100 border-2 border-blue-500 shadow-sm 
                      w-full sm:w-[300px] md:w-[340px] lg:w-[380px] 
                      hover:shadow-lg transition-all duration-300 mx-auto">

       
        <figure className="bg-gray-200 p-4 rounded-2xl w-3/4 mx-auto mt-4">
          <img
            className="h-[200px] md:h-[240px] object-contain mx-auto"
            src={singleBook.image}
            alt={singleBook.bookName}
          />
        </figure>

        
        <div className="card-body text-center">
          
          <div className="flex flex-wrap justify-center gap-2 font-bold text-sm text-green-600">
            {singleBook.tags.map((tag, index) => (
              <span key={index} className="bg-green-50 border border-green-300 px-2 py-1 rounded-xl">
                #{tag}
              </span>
            ))}
          </div>

         
          <h2 className="card-title justify-center text-lg md:text-xl mt-2">
            {singleBook.bookName}
            <div className="badge badge-secondary ml-2">
              {singleBook.yearOfPublishing}
            </div>
          </h2>

         
          <p className="text-gray-600 text-sm md:text-base">By: {singleBook.author}</p>

         
          <div className="card-actions flex justify-between items-center mt-3 text-sm md:text-base">
            <div className="badge badge-outline">{singleBook.category}</div>
            <div className="flex items-center gap-1 badge badge-outline">
              {singleBook.rating}
              <FaStar className="text-yellow-400" />
            </div>
          </div>

         
          <p className="text-md font-semibold mt-2">
            Pages: <span className="font-bold">{singleBook.totalPages}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
