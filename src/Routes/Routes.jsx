// import React, { Children, Component } from 'react';
// import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
// import Root from '../Pages/Root/Root';
// import ErrorPage from '../Pages/ErrorPage/ErrorPage';
// import Home from '../Pages/Home/Home';
// import About from '../Pages/About/About';
// import BookDetails from '../Pages/BookDetails/BookDetails';
// import ReadList from '../Pages/ReadList/ReadList';

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     Component:Root,
//     // errorElement:<ErrorPage></ErrorPage>,
//      children:[
//     {
//         index:true,
//         // loader:() => fetch('./bookdata.json'),
//         loader:() => fetch('/public/bookdata.json'),
//         path:"/",
//         Component:Home
//     },
//     {
//         path:"/about",
//         Component:About
//     },
//     {
//         path:"readlist",
//         loader:() => fetch('/public/bookdata.json'),
//         Component:ReadList
//     },
//     {
//         path:'/BookDetails/:id',
//         loader:() => fetch('/public/bookdata.json'),
//         Component:BookDetails
//     }
//   ]
//   },
 
// ]);


import React, { Children, Component } from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // ✅ Correct syntax is "element", not "Component"
    errorElement: <ErrorPage />, // ✅ You can keep this now
    children: [
      {
        index: true,
        loader: () => fetch('/bookdata.json'), // ✅ Don't use "/public/"
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "readlist",
        loader: () => fetch('/bookdata.json'),
        element: <ReadList />
      },
      {
        path: "bookdetails/:id",
        loader: () => fetch('/bookdata.json'),
        element: <BookDetails />
      }
    ]
  }
]);
