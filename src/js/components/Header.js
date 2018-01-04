// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Icon from './Icon';

const Header = ({ location }) => (
  <header className="header">
    <div className="header__inner row__inner">
      <Link to="/">
        <Icon
          className="header__logo"
          glyph={require('../../images/sprite/logo.svg')}
        />
      </Link>
      {location.pathname.includes('/photos/') && (
        <Link className="button" to="/">
          Back
        </Link>
      )}
    </div>
  </header>
);

export default Header;
