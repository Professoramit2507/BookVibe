import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../../Components/Book/Book';



const ReadList = () => {

    const [radList,setreadList] = useState([])

    const data = useLoaderData()
    console.log(data)

    useEffect (() => {
        const storedBookData = getStoredBook()
        const convertedStroedBooks = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStroedBooks.includes(book.bookId))
        setreadList(myReadList)
    },[])
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Book Read List</Tab>
                    <Tab>WhisList</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book i read : {radList.length}</h2>
                   <div className=''>
                        {
                            radList.map(singleBook => <Book key={singleBook.id} singleBook={singleBook} ></Book>)
                        }
                   </div>
                </TabPanel>
                <TabPanel>
                    <h2>WhisList</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;