export const getAuthor = str => str.match(/"(.*?)"/)[1];

export const getID = url => url.match(/([^/]*)\/*$/)[1];
