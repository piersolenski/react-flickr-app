// Dependencies
import fetchJsonp from 'fetch-jsonp';
// Data
import CONFIG from '../../data/config.json';

export default function flickrAPI(params, callback) {
  return fetchJsonp(
    `https://api.flickr.com/services/${params}&api_key=${
      CONFIG.flickrAPIKey
    }&format=json&jsoncallback=${callback}`,
    {
      jsonpCallbackFunction: callback
    }
  )
    .then(response => response.json())
    .catch(ex => ex);
}
