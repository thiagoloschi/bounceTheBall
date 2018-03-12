import { request, post } from './rest';

const endpointBaseUrl = '/me';

export function callFetchRanking() {
  const endpoint = `${endpointBaseUrl}`;
  return request(endpoint);
}

export function callUpdateRanking(data) {
  const endpoint = `${endpointBaseUrl}`;
  return post(endpoint, data);
}
