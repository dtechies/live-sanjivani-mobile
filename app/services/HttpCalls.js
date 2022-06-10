import {BASE_URL} from 'config';

function _post(url, headers, data) {
  const options = {
    method: 'POST',
    headers: headers.headers,
    body:
      headers.headers['Content-Type'] === 'multipart/form-data'
        ? data
        : JSON.stringify(data),
  };
  return fetch(url, options)
    .then(r => {
      return r.json();
    })
    .catch(e => console.log('error', e));
}

function _get(url, headers) {
  const options = {method: 'GET', headers: headers.headers};
  return fetch(url, options)
    .then(r => r.json())
    .catch(e => {
      // console.log('KYAAAError', e);
    });
}

function _delete(url, headers, data) {
  const options = {
    method: 'DELETE',
    headers: headers.headers,
    body: JSON.stringify(data),
  };
  return fetch(url, options).then(r => {
    return r.json();
  });
}

function _api_calls(type, url, headers = {}, data = {}) {
  url = `${BASE_URL + url}`;
  switch (type) {
    case 'POST':
      return _post(url, headers, data);
    case 'GET':
      return _get(url, headers);
    case 'DELETE':
      return _delete(url, headers, data);
    case 'PUT':
      break;
  }
}

const HttpCalls = {_api_calls, _post, _get, _delete};

export default HttpCalls;
