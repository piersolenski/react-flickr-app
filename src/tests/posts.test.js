import { getAuthor, getID } from '../js/utils/posts';

test('it returns a username from a string', () => {
  expect(getAuthor('nobody@flickr.com ("Erik Viggh")')).toBe('Erik Viggh');
});

test('it returns an id from a url', () => {
  expect(getID('https://www.flickr.com/photos/tonyworrall/24622444447/')).toBe(
    '24622444447'
  );
});
