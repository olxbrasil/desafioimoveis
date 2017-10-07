import StateReducer from './StateReducer';

test('StateReducer with not an action type', () => {
  expect(
    StateReducer({}, {
      type: 'NOT_TYPE',
      payload: null,
    })
  ).toEqual({
    list: {},
  });
})

test('StateReducer FETCH_STATES', () => {
  expect(
    StateReducer({}, {
      type: 'FETCH_STATES',
      payload: {
        mg: {
          aluguel: 2000,
        },
      },
    })
  ).toEqual({
    list: {
      mg: {
        aluguel: 2000,
      },
    },
  });
})