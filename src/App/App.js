import React, { Component } from 'react';
import AppHero from './../components/AppHero/AppHero';
import UserForm from './../components/UserForm/UserForm';
import Graphs from './../components/Graphs/Graphs';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedState: {
        id: null,
        value: null,
        label: null
      },
      rangeValues: {
        rentPerMonth: 3000,
        propertyToBuy: 100000,
        timeInProperty: 10,
        interestTaxPerYear: 11.5,
      }
    };

    this.onSelectChange = this.onSelectChange.bind(this);
    this.onSliderChange = this.onSliderChange.bind(this);
  }

  onSelectChange(selectedState) {
    this.setState((previousValue) => ({
      selectedState: {
        ...previousValue.selectedState,
        ...selectedState
      }
    }));
  }

  onSliderChange(whichSlider, value) {
    this.setState((previousValue) => ({
      rangeValues: {
        ...previousValue.rangeValues,
        [whichSlider]: value,
      }
    }));
  }

  render() {
    return (
      <div styleName="app">
        <AppHero />
        <div styleName="app-body">
          <div styleName="app-body-half">
            <UserForm
              selectedState={this.state.selectedState}
              rangeValues={this.state.rangeValues}
              onSelectChange={this.onSelectChange}
              onSliderChange={this.onSliderChange}
            />
          </div>
          <div styleName="app-body-half">
            <Graphs />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
