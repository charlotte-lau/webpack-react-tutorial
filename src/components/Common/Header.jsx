import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
        <header>
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/form/2'>Form</Link></li>
              </ul>
            </nav>
          </header>
        )
    }
};

export default Header;