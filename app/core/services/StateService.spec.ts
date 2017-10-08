import * as moxios from 'moxios';

import StateService from './StateService';

test('StateService', async(done) => {
  moxios.install();
  const stateService = new StateService();
  moxios.wait(() => {
    let request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: 'test mock',
    }).then(resp =>{
      done();
    }).catch(error => done(error));
  });
  const resp = await stateService.getList();
  expect(resp.data).toBe('test mock');
  moxios.uninstall();
});