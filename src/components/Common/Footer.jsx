import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

function Footer(/*props*/) {
  return (
    <footer>
        <Nav>
          <NavItem>
            Privacy policy
          </NavItem>
          <NavItem
            title="Item">
            Terms & Conditions
          </NavItem>
          <NavItem>
            Some other professional link
          </NavItem>
        </Nav>

        <div className="text-center small copyright">
          © RLM 2016
        </div>
    </footer>
  );
}

export default Footer;