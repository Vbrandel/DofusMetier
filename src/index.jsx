import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home/Home';
import Error from './pages/404/404';
import Pecheur from './pages/Pecheur/Pecheur'
import Bucheron from './pages/Bucheron/Bucheron'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>}/>
            <Route path="pecheur" element={<Pecheur/>}/>
            <Route path="bucheron" element={<Bucheron/>}/>
            <Route path="*" element={<Error/>}/>
        </Route>
    ));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);