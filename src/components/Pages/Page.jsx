import React from 'react';
import ReactDOM from "react-dom";

const Page = () => {
    return (
        <div id="page-content">
        Hello React!
        </div>
    );
};

export default Page;
const pageWrapper = document.getElementById("page");
pageWrapper ? ReactDOM.render(<Page />, pageWrapper) : false;