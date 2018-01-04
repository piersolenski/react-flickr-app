// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
// Components
import Icon from './Icon';
// Utilities
import { getAuthor } from '../utils/posts';

const PostPreview = ({
  title,
  authorId,
  date,
  link,
  id,
  thumb,
  author,
  index
}) => (
  <article
    className="post-preview"
    style={{ animationDelay: `${index * 0.05}s` }}
  >
    <Link className="post-preview__image" to={`/photos/${id}`}>
      <img src={thumb} alt={title} />
    </Link>
    <div className="post-preview__info">
      <h1 className="post-preview__title truncate">
        <Link to={`/photos/${id}`}>{title || 'An image'}</Link>
      </h1>
      <div>
        <a
          className="post-preview__meta"
          href={`https://www.flickr.com/photos/${authorId}`}
        >
          <Icon
            className="post-preview__icon"
            glyph={require('../../images/sprite/user.svg')}
          />
          {getAuthor(author)}
        </a>
        <time className="post-preview__meta" dateTime={date}>
          <Icon
            className="post-preview__icon"
            glyph={require('../../images/sprite/calendar.svg')}
          />
          {format(date, 'Mo MMM YYYY [at] HH:mm')}
        </time>
        <a className="post-preview__meta" href={link}>
          <Icon
            className="post-preview__icon"
            glyph={require('../../images/sprite/eye.svg')}
          />
          View on Flickr
        </a>
      </div>
    </div>
  </article>
);

export default PostPreview;
