import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Header from '../Common/Header.jsx'
import Footer from '../Common/Footer.jsx'
import Main from './Main.jsx'
import style from './page.scss'

const Page = () => {
    return (
        <div id="page-content">
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default Page;
const pageWrapper = document.getElementById("page");
pageWrapper ? ReactDOM.render(<BrowserRouter>
    <Page />
  </BrowserRouter>, pageWrapper) : false;