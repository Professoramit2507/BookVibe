// import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import { getStoredBook } from '../../utility/addToDB';
// import Book from '../../Components/Book/Book';
// import { FaArrowDown } from "react-icons/fa";



// const ReadList = () => {

//     const [radList,setreadList] = useState([])
//     const [sort,setSort] = useState("")

//     const data = useLoaderData()
//     console.log(data)

//     useEffect (() => {
//         const storedBookData = getStoredBook()
//         const convertedStroedBooks = storedBookData.map(id => parseInt(id))
//         const myReadList = data.filter(book => convertedStroedBooks.includes(book.bookId))
//         setreadList(myReadList)
//     },[])



//     const handleSort = (type) => {
//         setSort(type)
//         if(type === "Pages")
//         {
//             const sortedByPage = [...radList].sort((a,b) => b.totalPages - a.totalPages)
//             setreadList(sortedByPage)
//         }
//         if(type === "Ratings")
//         {
//             const sortedByRatings = [...radList].sort((a,b)=>b.rating-a.rating)
//             setreadList(sortedByRatings)
//         }
//     }


//     return (
//         <div>

//                 <details className="dropdown">
//                     <summary className="btn m-1">Sort By:{sort?sort:""} <FaArrowDown className='hidden'></FaArrowDown></summary>
//                     <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
//                         <li><a onClick={()=>handleSort("Pages")}>Pages</a></li>
//                         <li><a onClick={()=>handleSort("Ratings")}>Ratings</a></li>
//                     </ul>
//                 </details>

//             <Tabs>
//                 <TabList>
//                     <Tab>Book Read List</Tab>
//                     <Tab>WhisList</Tab>
//                 </TabList>

//                 <TabPanel>
//                     <h2>Book i read : {radList.length}</h2>
//                    <div className=''>
//                         {
//                             radList.map(singleBook => <Book key={singleBook.id} singleBook={singleBook} ></Book>)
//                         }
//                    </div>
//                 </TabPanel>
//                 <TabPanel>
//                     <h2>WhisList</h2>
//                 </TabPanel>
//             </Tabs>
//         </div>
//     );
// };

// export default ReadList;






import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../../Components/Book/Book';
import { FaArrowDown } from "react-icons/fa";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map(id => parseInt(id));
    const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
    setReadList(myReadList);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);
    if (type === "Pages") {
      const sortedByPage = [...readList].sort((a, b) => b.totalPages - a.totalPages);
      setReadList(sortedByPage);
    }
    if (type === "Ratings") {
      const sortedByRatings = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedByRatings);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">

   
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-2xl font-semibold text-center sm:text-left">
          My Read & Wish List 📚
        </h1>

        
        <details className="dropdown">
          <summary className="btn btn-outline flex items-center gap-2">
            Sort By: {sort ? sort : "Select"} 
            <FaArrowDown className="text-sm" />
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-48 p-2 shadow-md">
            <li><a onClick={() => handleSort("Pages")}>Pages</a></li>
            <li><a onClick={() => handleSort("Ratings")}>Ratings</a></li>
          </ul>
        </details>
      </div>

      
      <Tabs>
        <TabList className="flex flex-wrap gap-2 mb-4 border-b border-gray-300 pb-2">
          <Tab className="cursor-pointer px-4 py-2 border rounded-md hover:bg-blue-100 focus:bg-blue-200 focus:outline-none">
            Book Read List
          </Tab>
          <Tab className="cursor-pointer px-4 py-2 border rounded-md hover:bg-blue-100 focus:bg-blue-200 focus:outline-none">
            WishList
          </Tab>
        </TabList>

        
        <TabPanel>
          <h2 className="text-lg font-medium mb-4">
            Books I’ve Read: <span className="font-bold text-blue-600">{readList.length}</span>
          </h2>

          {readList.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {readList.map(singleBook => (
                <Book key={singleBook.bookId} singleBook={singleBook} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center mt-6">No books in your read list yet.</p>
          )}
        </TabPanel>

       
        <TabPanel>
          <h2 className="text-lg font-medium mb-4">WishList</h2>
          <p className="text-gray-500 text-center mt-6">Your wishlist is empty.</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
