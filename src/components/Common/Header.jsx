import React from 'react';
import { Glyphicon } from 'react-bootstrap';


class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header"><a href="/" className="navbar-brand">Our Awesome Store</a>
                        <button type="button" className="navbar-toggle collapsed"><span className="sr-only">Toggle navigation</span><span
                            className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li role="presentation"><a role="button" href="#">Home</a></li>
                            <li role="presentation"><a role="button" href="#">Shop</a></li>
                            <li role="presentation"><a role="button" href="#"><span
                                className="glyphicon glyphicon-shopping-cart"></span></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};

export default Header;