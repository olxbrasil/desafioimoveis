import * as React from 'react';
import { connect } from 'react-redux';

import './stateSelect.scss';
import { setState } from '../../framework/actions/SimulationAction';
import IStore from '../../../core/interfaces/IStore';

type Props = {
  states: Object,
  selectedState: string,
  setState: (state: Object) => void,
};

class StateSelect extends React.Component {

  props: Props;

  onChange = (event: { target: { value: string } }) => {
    const { value } = event.target;
    const state = {
      ...this.props.states[value],
      selectedState: value,
    };
    this.props.setState(state);
  }

  renderOptions() {
    return Object.keys(this.props.states).map((state, index)  => (
      <option key={index} value={state}>{state}</option>
    ));
  }

  render() {
    return (
      <div className="field-area">
        <label htmlFor="stateSelect">Em qual estado você deseja morar?</label>
        <select id="stateSelect" value={this.props.selectedState} onChange={this.onChange} className="state-select">
          <option value="" disabled={true}>UF</option>
          {this.renderOptions()}
        </select>
      </div>
    );
  }

}

const mapStateToProps = (appState: IStore) => ({
  states: appState.state.list,
  selectedState: appState.simulator.selectedState,
});

const mapDispatchToProps = (dispatch: (action: Object) => void) => ({
  setState: (state: Object) => { dispatch(setState(state)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(StateSelect);