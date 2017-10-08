import * as moxios from 'moxios';

import StateController from './StateController';

test('StateController', async (done) => {
  moxios.install();
  const stateController = new StateController();
  moxios.wait(() => {
    let request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: {
        RJ: {
          aluguel: 1390,
          compra: 111200
        },
      },
    }).then(resp =>{
      done();
    }).catch(error => done(error));
  });
  const data = await stateController.getStateList();
  expect(data).toEqual({
    RJ: {
      rental: 1390,
      purchase: 111200,
    }
  });
  moxios.uninstall();
})