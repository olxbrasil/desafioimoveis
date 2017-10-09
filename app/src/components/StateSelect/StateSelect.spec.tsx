import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactTestUtils from 'react-dom/test-utils';
import configureMockStore from 'redux-mock-store';

import * as TestRenderer from 'react-test-renderer';

import StateSelect from './StateSelect';

const mockStore = configureMockStore();

const selectProps = {
  state: {
    list: {
      SP: {
        rental: 2000,
        purchase: 2000,
      }
    },
  },
  simulator: {
    selectedState: 'SP',
  },
}


test('StateSelect', () => {
  const store = mockStore({
    ...selectProps
  })
  const wrapper = TestRenderer.create(
    <Provider store={store}>
      <StateSelect />
    </Provider>
  );
  const wrapperSelect =  wrapper.root.findByType('select');
  expect(wrapperSelect.props.value).toEqual('SP');
  expect(wrapperSelect.props.children.length).toBe(2);
});
