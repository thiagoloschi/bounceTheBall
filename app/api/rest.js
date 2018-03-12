import fetch from 'request-promise';

const HOST = process.env.HOST || window.location.origin;

export function request(endpoint, qs, headers) {
  const uri = `${HOST}${endpoint}`;
  const options = {
    method: 'GET',
    json: true,
    uri,
    qs,
    headers,
  };
  return fetch(options).then(
    (response) => response
  );
}

export function post(endpoint, body, qs, headers) {
  const uri = `${HOST}${endpoint}`;
  const options = {
    method: 'POST',
    json: true,
    uri,
    body,
    qs,
    headers,
  };
  return fetch(options);
}
