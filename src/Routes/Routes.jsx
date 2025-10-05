import React, { Children, Component } from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
     children:[
    {
        index:true,
        // loader:() => fetch('./bookdata.json'),
        loader:() => fetch('/public/bookdata.json'),
        path:"/",
        Component:Home
    },
    {
        path:"/about",
        Component:About
    },
    {
        path:'/BookDetails/:id',
        loader:() => fetch('/public/bookdata.json'),
        Component:BookDetails
    }
  ]
  },
 
]);