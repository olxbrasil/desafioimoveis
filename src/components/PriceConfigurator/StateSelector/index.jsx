import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class StateSelector extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: null,
      options: [' ', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
    }
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const items = []
    for (let i = 0; i < this.state.options.length; i++) {
      const value = this.state.options[i];
      items.push(<MenuItem key={i} value={value} primaryText={value} />)
    }

    return (
      <SelectField
        id="state-select"
        maxHeight={200}
        style={{width: '100%', marginBottom: 24}}
        value={this.state.value}
        onChange={this.handleChange}
        floatingLabelText="Selecione o seu estado">
      {items}
      </SelectField>
    )
  }
}

export default StateSelector;
