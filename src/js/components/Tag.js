// Dependencies
import React from 'react';
// Components
import Icon from './Icon';

const Tag = ({ name }) => (
  <li className="tag truncate">
    <Icon
      className="tag__icon"
      glyph={require('../../images/sprite/tag.svg')}
    />
    {name}
  </li>
);

export default Tag;
