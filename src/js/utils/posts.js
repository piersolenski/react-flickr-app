export const getAuthor = str => {
  const res = str.match(/"(.*?)"/)[1];
  console.log(str, res);
  return res;
};

export const getID = url => {
  const res = url.match(/([^/]*)\/*$/)[1];
  console.log(url, res);
  return res;
};
