import configureMockStore from 'redux-mock-store';

import * as SimulationActions from './SimulationAction';

const mockStore = configureMockStore();

test('simulationActions setState', () => {
  const store = mockStore({});
  const expectedAction = [{
    type: 'STATE_CHANGE',
    payload: {
      test: 'test',
    }
  }];
  store.dispatch(SimulationActions.setState({ test: 'test' }));
  expect(store.getActions()).toEqual(expectedAction);
})

test('simulationActions setInputValue', () => {
  const store = mockStore({});
  const expectedAction = [{
    type: 'SET_INPUT_VALUE',
    payload: {
      name: 'test',
      value: 'test',
    }
  }];
  store.dispatch(SimulationActions.setInputValue({ name: 'test', value: 'test' }));
  expect(store.getActions()).toEqual(expectedAction);
})