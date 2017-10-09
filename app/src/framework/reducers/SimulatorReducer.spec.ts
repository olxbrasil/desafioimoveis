import SimulatorReducer from './SimulatorReducer';

const InitialState = {
  selectedState: 'RJ',
  purchase: '200000',
  rental: '1200',
  time: '10',
  tax: '11.5',
};

test('SimulatorReducer with not an action type', () => {
  expect(
    SimulatorReducer(undefined, {
      type: 'NOT_TYPE',
      payload: null,
    })
  ).toEqual(InitialState);
});

test('SimulatorReducer SET_INPUT_VALUE', () => {
  expect(
    SimulatorReducer(InitialState, {
      type: 'SET_INPUT_VALUE',
      payload: {
        name: 'purchase',
        value: '100000',
      },
    })
  ).toEqual({
    selectedState: 'RJ',
    purchase: '100000',
    rental: '1200',
    time: '10',
    tax: '11.5',
  });
})

