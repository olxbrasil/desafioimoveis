import 'whatwg-fetch';
import { forIn } from 'lodash';
import { checkStatus, parseJSON } from 'actions/utils';

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

const formatStates = states => {
  // Empty default value because value because https://github.com/callemall/material-ui/issues/4275
  const list = [{ state: ' ', rent: 0, buy: 0 }];
  forIn(states, (v, k) => {
    list.push({
      state: k,
      rent: v.aluguel,
      buy: v.compra,
    });
  });
  return list;
};

export function getStates() {
  return dispatch => {
    dispatch(requestStates());

    return fetch('api/valores.json', { method: 'get' })
      .then(checkStatus)
      .then(parseJSON)
      .then(formatStates)
      .then(states => dispatch(receiveStates(states)))
      .catch(err => console.log(err));
  };
}

function updateState(index) {
  return {
    type: 'SELECT_STATE',
    index,
  };
}

export function updatePrice(value, type) {
  const formattedType = `UPDATE_${type.toUpperCase()}`;
  return {
    value,
    type: formattedType,
  };
}

export function selectState(index, state) {
  return dispatch => {
    dispatch(updateState(index));
    dispatch(updatePrice(state.rent, 'rent'));
    dispatch(updatePrice(state.buy, 'buy'));
  };
}
