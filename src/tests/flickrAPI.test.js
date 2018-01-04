import flickrAPI from '../js/services/flickrAPI';

test('the flickr API works', () => {
  expect.assertions(1);
  return flickrAPI(
    'feeds/photos_public.gne?tags=potato&tagmode=all',
    'feed'
  ).then(data => {
    expect(data.title).toBe('Recent Uploads tagged potato');
  });
});
