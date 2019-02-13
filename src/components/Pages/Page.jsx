import React from 'react';
import ReactDOM from "react-dom";
import Header from '../Common/Header.jsx'
import Footer from '../Common/Footer.jsx'
import style from './page.scss'

const Page = () => {
    return (
        <div id="page-content">
            <Header />
            <div id="content">

            </div>
            <Footer />
        </div>
    );
};

export default Page;
const pageWrapper = document.getElementById("page");
pageWrapper ? ReactDOM.render(<Page />, pageWrapper) : false;