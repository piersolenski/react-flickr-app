// Dependencies
import React, { Component } from 'react';
import { format } from 'date-fns';
// Components
import Icon from '../components/Icon';
import Spinner from '../components/Spinner';
import Tag from '../components/Tag';
// Services
import flickrAPI from '../services/flickrAPI';

const filterMedia = media => {
  const onlyPhotos = media.filter(m => m.media === 'photo');
  const desiredSizes = [
    'Small',
    'Small 320',
    'Medium',
    'Medium 640',
    'Medium 800',
    'Large',
    'Large 1600',
    'Large 2048'
  ];
  const onlyDesiredSizes = onlyPhotos.filter(photo =>
    desiredSizes.includes(photo.label)
  );
  return onlyDesiredSizes;
};

class Photo extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      photo: {}
    };
  }
  componentWillMount() {
    const photoId = this.props.match.params.photo;

    Promise.all([
      flickrAPI(
        `rest/?method=flickr.photos.getInfo&photo_id=${photoId}`,
        'info'
      ),
      flickrAPI(
        `rest/?method=flickr.photos.getSizes&photo_id=${photoId}`,
        'sizes'
      )
    ])
      .then(data => {
        this.setState({
          loaded: true,
          photo: {
            info: data[0].photo,
            sizes: filterMedia(data[1].sizes.size)
          }
        });
      })
      .catch(() => {
        this.setState({
          error: true
        });
      });
  }
  generateSources() {
    return this.state.photo.sizes.reverse().map(size => {
      return (
        <source
          srcSet={size.source}
          media={`(min-width: ${size.width / 2}px)`}
        />
      );
    });
  }
  render() {
    const { photo, loaded, error } = this.state;
    return (
      <div className="row__inner">
        {!loaded && <Spinner />}
        {error && <p>Oops! Something went wrong...</p>}
        {loaded && (
          <div>
            <header className="photo__header">
              <h1 className="photo__title">
                {photo.info.title._content || 'An image'}
              </h1>
              <a
                className="photo__user"
                href={`https://www.flickr.com/photos/${photo.info.owner.nsid}`}
              >
                <Icon
                  className="photo__icon"
                  glyph={require('../../images/sprite/user.svg')}
                />
                {photo.info.owner.username}
              </a>
              <time dateTime={photo.info.dates.taken}>
                <Icon
                  className="photo__icon"
                  glyph={require('../../images/sprite/calendar.svg')}
                />
                {format(photo.info.dates.taken, 'Mo MMM YYYY [at] HH:mm')}
              </time>
            </header>
            <div className="photo__main">
              <picture className="photo__image">
                {this.generateSources()}
                <img
                  src={photo.sizes[0].source}
                  alt={photo.info.title._content}
                />
              </picture>
              <div className="photo__info">
                <div
                  className="photo__description"
                  dangerouslySetInnerHTML={{
                    __html: photo.info.description._content
                  }}
                />
                <h2 className="photo__subtitle">Tags:</h2>
                <ul className="unstyled-list tag-list">
                  {photo.info.tags.tag
                    .splice(0, 25)
                    .map((tag, i) => <Tag key={i} name={tag._content} />)}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Photo;
