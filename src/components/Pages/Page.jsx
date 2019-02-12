import React from 'react';
import ReactDOM from "react-dom";
import Header from '../Common/Header.jsx'

const Page = () => {
    return (
        <div id="page-content">
            <Header />
        </div>
    );
};

export default Page;
const pageWrapper = document.getElementById("page");
pageWrapper ? ReactDOM.render(<Page />, pageWrapper) : false;