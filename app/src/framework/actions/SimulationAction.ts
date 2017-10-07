export const setState = (state: Object) => ({ type: 'STATE_CHANGE', payload: state });
export const setInputValue = (event: { name: string, value: string }) =>
  ({ type: 'SET_INPUT_VALUE', payload: event});