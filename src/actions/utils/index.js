import { forIn } from 'lodash';

export function getQueryString(params) {
  let queryString = '?';
  const queries = [];

  forIn(params, (v, k) => queries.push(`${k}=${v}`));
  queryString += queries.join('&');

  return queryString;
}

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return response.json().then(err => {
    throw err;
  });
}

export function parseJSON(response) {
  return response.json();
}
