import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const BookDetails = () => {
    const {id} = useParams()
    //console.log(id)
    const bookID = parseInt(id)
    const data = useLoaderData()
    //console.log(data)
    const singleBook = data.find(book => book.bookId === bookID)
    //console.log(singleBook)


    const handleMarkAsRead = id => {
        addToStoredDB(id)
    }

    return (
        <div className='border border-red-500 m-10 p-6 w-full mx-auto'>

           <div className='flex'>
                 <div className='max-w-[700px] bg-gray-200 rounded-2xl ml-[150px] border border-blue-500 p-4 '>
                    <img className='mt-6 w-[500px] p-4' src={singleBook.image} alt="" />
                </div>
                <div className='ml-10 mt-20'>
                    <h1 className='text-3xl font-semibold'>{singleBook.bookName}</h1>
                    <h2 className='mt-2 text-xl'>By : {singleBook.author}</h2>
                    <p className='border-b-1 border-gray-300 mt-3'></p>
                    <h4 className=''>{singleBook.category}</h4>
                    <p className='border-b-1 border-gray-300'></p>
                    <p className='mt-3'><span className='text-md font-bold'>Review</span>{singleBook.review}</p>
                    <p className='flex gap-3'>
                        <span className='text-md font-bold mt-4'>Tag :</span>
                            {
                                singleBook.tags.map(tag => <button className='mt-4 text-green-400 font-bold p-1  rounded-2xl'>#{tag}</button>)
                            }
                    </p>
                     <p className='border-b-1 border-gray-300'></p>
                     <div className='mt-3 text-md'>
                        <p>Number of Pages:<span className='ml-10 font-bold'>{singleBook.totalPages}</span></p>
                        <p>Publisher:<span className='ml-25 font-bold'>{singleBook.publisher}</span></p>
                        <p>Year of Publishing:<span className='ml-10 font-bold'>{singleBook.yearOfPublishing}</span></p>
                        <p>Rating:<span className='ml-31 font-bold'>{singleBook.rating}</span></p>
                     </div>
                    <button onClick={()=>handleMarkAsRead(id)} className="btn btn-primary m-2">Mark as Read</button>
                    <button className="btn btn-accent m-2">Add to WishList</button>
                </div>
           </div>

        </div>
    );
};

export default BookDetails;