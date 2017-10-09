/**
 * Sets slected state and simulation default value
 * @param state 
 */
export const setState = (state: Object) => ({ type: 'STATE_CHANGE', payload: state });
/**
 * Changes any input value from simulation
 * @param event 
 */
export const setInputValue = (event: { name: string, value: string }) =>
  ({ type: 'SET_INPUT_VALUE', payload: event});