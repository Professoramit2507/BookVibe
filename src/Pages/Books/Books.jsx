import React, { Suspense} from 'react';
import Book from '../../Components/Book/Book';

const Books = ({bookData}) => {
    
    // useEffect(() => {
    //     fetch("bookdata.json")
    //     .then(res => res.json())
    //     .then(data => {
    //         setallBooks(data)
    //     })
    // },[])

    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>
            <Suspense fallback={<span>Loading.....</span>}>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-20'>
                 {
                    bookData.map((singleBook)=> <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                 }
              </div>
            </Suspense>
        </div>
    );
};

export default Books;