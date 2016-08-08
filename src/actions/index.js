import 'whatwg-fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return response.json().then(err => {
    throw err;
  });
}

function parseJSON(response) {
  return response.json();
}

function requestStates() {
  return {
    type: 'REQUEST_STATES',
  };
}

function receiveStates(list) {
  return {
    type: 'RECEIVE_STATES',
    list,
  };
}

export function getStates() {
  return dispatch => {
    dispatch(requestStates());

    return fetch('api/valores.json', { method: 'get' })
      .then(checkStatus)
      .then(parseJSON)
      .then(data => dispatch(receiveStates(data)))
      .catch(err => console.log(err));
  };
}

export function selectState(state) {
  return {
    type: 'SELECT_STATE',
    state,
  };
}

export function updatePrice(value, type) {
  const formattedType = `UPDATE_${type.toUpperCase()}`;
  return {
    value,
    type: formattedType,
  };
}
