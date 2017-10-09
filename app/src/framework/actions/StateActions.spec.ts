import configureMockStore from 'redux-mock-store';
import * as moxios from 'moxios';

import * as StateActions from './StateActions';

const mockStore = configureMockStore();

test('StateActions fetchStates', () => {
  const store = mockStore({});
  const expectedAction = [{
    type: 'FETCH_STATES',
    payload: {
      test: 'test',
    }
  }];
  store.dispatch(StateActions.fetchStates({ test: 'test' }));
  expect(store.getActions()).toEqual(expectedAction);
});

test('StateActions getStateList', async(done) => {
  moxios.install();
  const store = mockStore({});
  const expectedAction = [{
    type: 'FETCH_STATES',
    payload: {
      RJ: {
        purchase: 2000,
        rental: 100,
      },
    },
  }];
  moxios.wait(() => {
    let request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: {
        RJ: {
          compra: 2000,
          aluguel: 100,
        }
      },
    }).then(resp =>{
      done();
    }).catch(error => done(error));
  });
  await StateActions.getStateList(store.dispatch);
  expect(store.getActions()).toEqual(expectedAction);
  moxios.uninstall();
});