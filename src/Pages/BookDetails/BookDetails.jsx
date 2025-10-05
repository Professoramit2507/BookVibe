// import React from 'react';
// import { useLoaderData, useParams } from 'react-router';
// import { addToStoredDB } from '../../utility/addToDB';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

// const MySwal = withReactContent(Swal)

// const BookDetails = () => {
//     const {id} = useParams()
//     //console.log(id)
//     const bookID = parseInt(id)
//     const data = useLoaderData()
//     //console.log(data)
//     const singleBook = data.find(book => book.bookId === bookID)
//     //console.log(singleBook)


//     const handleMarkAsRead = id => {
//         addToStoredDB(id)


//         Swal.fire({
//   title: "Good job!",
//   text: "Successfully added to ReadList!",
//   icon: "success"
// });
//     }

//     return (
//         <div className='border border-red-500 m-10 p-6 w-full mx-auto'>

//            <div className='flex'>
//                  <div className='max-w-[700px] bg-gray-200 rounded-2xl ml-[150px] border border-blue-500 p-4 '>
//                     <img className='mt-6 w-[500px] p-4' src={singleBook.image} alt="" />
//                 </div>
//                 <div className='ml-10 mt-20'>
//                     <h1 className='text-3xl font-semibold'>{singleBook.bookName}</h1>
//                     <h2 className='mt-2 text-xl'>By : {singleBook.author}</h2>
//                     <p className='border-b-1 border-gray-300 mt-3'></p>
//                     <h4 className=''>{singleBook.category}</h4>
//                     <p className='border-b-1 border-gray-300'></p>
//                     <p className='mt-3'><span className='text-md font-bold'>Review</span>{singleBook.review}</p>
//                     <p className='flex gap-3'>
//                         <span className='text-md font-bold mt-4'>Tag :</span>
//                             {
//                                 singleBook.tags.map(tag => <button className='mt-4 text-green-400 font-bold p-1  rounded-2xl'>#{tag}</button>)
//                             }
//                     </p>
//                      <p className='border-b-1 border-gray-300'></p>
//                      <div className='mt-3 text-md'>
//                         <p>Number of Pages:<span className='ml-10 font-bold'>{singleBook.totalPages}</span></p>
//                         <p>Publisher:<span className='ml-25 font-bold'>{singleBook.publisher}</span></p>
//                         <p>Year of Publishing:<span className='ml-10 font-bold'>{singleBook.yearOfPublishing}</span></p>
//                         <p>Rating:<span className='ml-31 font-bold'>{singleBook.rating}</span></p>
//                      </div>
//                     <button onClick={()=>handleMarkAsRead(id)} className="btn btn-primary m-2">Mark as Read</button>
//                     <button className="btn btn-accent m-2">Add to WishList</button>
//                 </div>
//            </div>

//         </div>
//     );
// };

// export default BookDetails;



import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookID = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find(book => book.bookId === bookID);

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
    MySwal.fire({
      title: 'Good job!',
      text: 'Successfully added to ReadList!',
      icon: 'success',
    });
  };

  return (
    <div className="max-w-6xl mx-auto border border-red-500 m-6 p-4 rounded-2xl shadow-sm">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 bg-gray-100 rounded-2xl border border-blue-500 p-4 flex justify-center">
          <img
            className="w-[90%] sm:w-[70%] md:w-[80%] lg:w-[500px] object-contain rounded-xl"
            src={singleBook.image}
            alt={singleBook.bookName}
          />
        </div>

        {/* Right Side - Details */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            {singleBook.bookName}
          </h1>
          <h2 className="text-lg md:text-xl text-gray-600">
            By: <span className="font-medium">{singleBook.author}</span>
          </h2>

          <div className="border-b border-gray-300 my-2"></div>

          <p className="text-gray-700 font-medium">{singleBook.category}</p>

          <div className="border-b border-gray-300 my-2"></div>

          <p className="text-gray-700 leading-relaxed">
            <span className="font-bold text-md mr-1">Review:</span>
            {singleBook.review}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-md font-bold text-gray-800">Tags:</span>
            {singleBook.tags.map((tag, index) => (
              <span
                key={index}
                className="text-green-600 bg-green-50 px-3 py-1 rounded-2xl text-sm font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="border-b border-gray-300 my-2"></div>

          <div className="text-gray-700 text-sm md:text-base space-y-1">
            <p>
              <span className="font-semibold">Number of Pages:</span>{' '}
              {singleBook.totalPages}
            </p>
            <p>
              <span className="font-semibold">Publisher:</span>{' '}
              {singleBook.publisher}
            </p>
            <p>
              <span className="font-semibold">Year of Publishing:</span>{' '}
              {singleBook.yearOfPublishing}
            </p>
            <p>
              <span className="font-semibold">Rating:</span>{' '}
              {singleBook.rating}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              onClick={() => handleMarkAsRead(singleBook.bookId)}
              className="btn btn-primary w-full sm:w-auto"
            >
              Mark as Read
            </button>
            <button className="btn btn-accent w-full sm:w-auto">
              Add to WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
