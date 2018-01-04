// Dependencies
import React from 'react';
// Components
import Icon from './Icon';

const SearchBar = ({ onChange }) => (
  <div className="search-bar">
    <Icon
      className="search-bar__icon"
      glyph={require('../../images/sprite/search.svg')}
    />
    <input
      className="search-bar__input"
      type="text"
      placeholder="Search…"
      onChange={onChange}
    />
  </div>
);
export default SearchBar;
